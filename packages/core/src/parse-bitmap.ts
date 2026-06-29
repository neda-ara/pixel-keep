import { BITMAP_SYMBOLS } from "./bitmap-symbols.js";

export function parseBitmap(
  bitmap: readonly string[],
  width: number,
  height: number,
  paletteSize: number,
): readonly number[] {
  const rows = bitmap;

  if (rows.length !== height) {
    throw new Error(`Bitmap has ${rows.length} row(s), expected ${height}.`);
  }

  const pixels: number[] = [];

  for (const row of rows) {
    if (row.length !== width) {
      throw new Error(
        `Bitmap row "${row}" has length ${row.length}, expected ${width}.`,
      );
    }

    for (const symbol of row) {
      if (symbol === ".") {
        pixels.push(-1);
        continue;
      }

      const index = BITMAP_SYMBOLS.indexOf(symbol);

      if (index === -1) {
        throw new Error(`Unknown bitmap symbol "${symbol}".`);
      }

      if (index >= paletteSize) {
        throw new Error(
          `Bitmap uses palette index ${index}, but palette only has ${paletteSize} color(s).`,
        );
      }

      pixels.push(index);
    }
  }

  return pixels;
}
