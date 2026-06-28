import type { PixelArt } from "./types.js";
import { validatePixelArt } from "./validate-pixel-art.js";

/**
 * Creates an immutable PixelArt object.
 *
 * Every asset in Pixel Keep should be created through this function.
 */
export function createPixelArt<const T extends PixelArt>(art: T): Readonly<T> {
  validatePixelArt(art);

  return Object.freeze(art);
}
