import { parseBitmap } from "./parse-bitmap.js";
import { validatePixelArt } from "./validate-pixel-art.js";
import type { PixelArt, PixelArtInput } from "./types.js";

export function createPixelArt<const T extends PixelArtInput>(
  art: T,
): Readonly<PixelArt> {
  const pixelArt: PixelArt = {
    ...art,
    pixels: parseBitmap(art.bitmap, art.width, art.height, art.palette.length),
  };

  validatePixelArt(pixelArt);

  return Object.freeze(pixelArt);
}
