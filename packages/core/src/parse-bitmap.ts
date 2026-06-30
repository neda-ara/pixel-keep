import { BITMAP_SYMBOLS } from "./bitmap-symbols.js";

export function parseBitmap(
  bitmap: readonly string[],
  width: number,
  height: number,
  paletteSize: number,
): readonly number[] {
  if (bitmap.length !== height) {
    throw new Error(`Bitmap has ${bitmap.length} row(s). Expected ${height}.`);
  }

  const pixels: number[] = [];

  for (const [rowIndex, row] of bitmap.entries()) {
    if (row.length !== width) {
      throw new Error(
        `Row ${rowIndex + 1} has ${row.length} pixel(s). Expected ${width}.\n\n${row}`,
      );
    }

    for (const [columnIndex, symbol] of [...row].entries()) {
      if (symbol === ".") {
        pixels.push(-1);
        continue;
      }

      const index = BITMAP_SYMBOLS.indexOf(symbol);

      if (index === -1) {
        throw new Error(
          `Unknown bitmap symbol "${symbol}" at row ${rowIndex + 1}, column ${columnIndex + 1}.`,
        );
      }

      if (index >= paletteSize) {
        throw new Error(
          `Palette index "${symbol}" at row ${rowIndex + 1}, column ${columnIndex + 1} exceeds the palette size (${paletteSize}).`,
        );
      }

      pixels.push(index);
    }
  }

  return pixels;
}
