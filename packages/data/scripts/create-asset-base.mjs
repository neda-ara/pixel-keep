import { promises as fs } from "node:fs";
import path from "node:path";

const [, , category, name, sizeArg] = process.argv;

if (!category || !name) {
  console.error("Usage: pnpm generate <category> <name> [size | widthxheight]");
  process.exit(1);
}

const { width, height } = parseSize(sizeArg);

const SRC_DIR = path.resolve("src");
const GENERATED_DIR = path.join(SRC_DIR, "generated");
const CATEGORY_DIR = path.join(SRC_DIR, category);

await fs.mkdir(CATEGORY_DIR, { recursive: true });

const fileName = `${toKebabCase(name)}.ts`;
const filePath = path.join(CATEGORY_DIR, fileName);

if (await exists(filePath)) {
  console.error(`❌ ${category}/${fileName} already exists.`);
  process.exit(1);
}

const componentName = toPascalCase(name);

const bitmap = Array.from(
  { length: height },
  () => `    "${".".repeat(width)}",`,
).join("\n");

await fs.writeFile(
  filePath,
  `import { createPixelArt } from "@pixel-keep/core";

const palette = [] as const;

export const ${componentName} = createPixelArt({
  id: "${toKebabCase(name)}",
  name: "${componentName}",
  category: "${category}",
  width: ${width},
  height: ${height},
  palette,
  bitmap: [
  ${bitmap}
  ],
  tags: [],
});
`,
  "utf8",
);

await regenerateExports();

console.log(`✨ Created ${category}/${fileName}`);

async function regenerateExports() {
  await fs.mkdir(GENERATED_DIR, { recursive: true });

  const exports = [];

  const entries = await fs.readdir(SRC_DIR, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "generated") continue;

    const categoryPath = path.join(SRC_DIR, entry.name);
    const files = await fs.readdir(categoryPath);

    for (const file of files) {
      if (!file.endsWith(".ts")) {
        continue;
      }
      if (file === "index.ts") {
        continue;
      }

      const base = file.slice(0, -3);

      exports.push(
        `export { ${toPascalCase(base)} } from "../${entry.name}/${base}.js";`,
      );
    }
  }

  exports.sort();

  await fs.writeFile(
    path.join(GENERATED_DIR, "index.ts"),
    exports.join("\n") + "\n",
    "utf8",
  );
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

function parseSize(size) {
  if (!size) {
    return {
      width: 16,
      height: 16,
    };
  }

  if (/^\d+$/.test(size)) {
    const value = Number(size);

    return {
      width: value,
      height: value,
    };
  }

  const match = /^(\d+)x(\d+)$/i.exec(size);

  if (!match) {
    console.error('Invalid size. Use "32" or "16x24".');
    process.exit(1);
  }

  return {
    width: Number(match[1]),
    height: Number(match[2]),
  };
}

function toPascalCase(value) {
  return value
    .split(/[-_ ]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function toKebabCase(value) {
  return value
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}
