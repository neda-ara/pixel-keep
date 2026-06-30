# Pixel Keep

A customizable React pixel art component library.

## Goals

- 🎨 Reusable pixel art components
- ⚛️ React-first API
- 📦 Published to npm
- 🌐 Documentation website built with Next.js
- 🧩 Large curated collection of pixel art assets

---

## Project Structure

```text
apps/
└── website        # Documentation and gallery

packages/
├── core           # Types, parsing and validation
├── data           # Pixel art assets and generator
└── pixel-keep     # React component library
```

---

## Development

Install dependencies:

```bash
pnpm install
```

Run the documentation website:

```bash
pnpm --filter website dev
```

Build all packages:

```bash
pnpm build
```

Typecheck everything:

```bash
pnpm typecheck
```

---

## Creating a New Asset

Default (16×16):

```bash
pnpm --filter @pixel-keep/data generate flowers sunflower
```

Square bitmap:

```bash
pnpm --filter @pixel-keep/data generate flowers sunflower 32
```

Custom dimensions:

```bash
pnpm --filter @pixel-keep/data generate characters totoro 24x16
```

The generator automatically:

- Creates the asset file
- Generates a bitmap template
- Regenerates exports
- Makes the asset immediately available to the docs website

---

## Asset Format

```ts
const palette = ["#FDD835", "#43A047"] as const;

export const Flower = createPixelArt({
  id: "flower",
  name: "Flower",
  category: "flowers",

  width: 16,
  height: 16,

  palette,

  bitmap: [
    "................",
    "...0011.........",
    "...1221.........",
    "................",
  ],

  tags: ["flower", "nature"],
});
```

- `.` represents transparency.
- Other symbols map to indices in the palette.

---

## Common Commands

Install dependencies:

```bash
pnpm install
```

Run docs:

```bash
pnpm --filter website dev
```

Generate asset:

```bash
pnpm --filter @pixel-keep/data generate <category> <name>
```

Build:

```bash
pnpm build
```

Typecheck:

```bash
pnpm typecheck
```

---

## Status

🚧 Active development
