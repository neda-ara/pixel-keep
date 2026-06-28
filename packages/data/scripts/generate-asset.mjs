import { promises as fs } from "node:fs";
import path from "node:path";

const SRC_DIR = path.resolve("src");
const GENERATED_DIR = path.join(SRC_DIR, "generated");
const OUTPUT_FILE = path.join(GENERATED_DIR, "index.ts");

await fs.mkdir(GENERATED_DIR, { recursive: true });

const exports = [];

const entries = await fs.readdir(SRC_DIR, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  if (entry.name === "generated") continue;

  const categoryDir = path.join(SRC_DIR, entry.name);

  const files = await fs.readdir(categoryDir);

  for (const file of files) {
    if (!file.endsWith(".ts")) continue;
    if (file === "index.ts") continue;

    const fileName = file.replace(".ts", "");
    const exportName = toPascalCase(fileName);

    exports.push(
      `export { ${exportName} } from "../${entry.name}/${fileName}.js";`,
    );
  }
}

exports.sort();

await fs.writeFile(OUTPUT_FILE, exports.join("\n") + "\n", "utf8");

console.log(`✅ Generated ${exports.length} export(s).`);

function toPascalCase(value) {
  return value
    .split(/[-_]/g)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
