import { TRANSPARENT } from "./constants.js";
import type { PixelArt } from "./types.js";

// Validates a PixelArt object.
// Throws an Error if the data is invalid.

export function validatePixelArt(art: PixelArt): void {
  if (art.width <= 0) {
    throw new Error("Width must be greater than 0.");
  }

  if (art.height <= 0) {
    throw new Error("Height must be greater than 0.");
  }

  if (art.palette.length === 0) {
    throw new Error("Palette cannot be empty.");
  }

  const expectedPixels = art.width * art.height;

  if (art.pixels.length !== expectedPixels) {
    throw new Error(
      `Expected ${expectedPixels} pixels but received ${art.pixels.length}.`,
    );
  }

  for (const index of art.pixels) {
    if (index === TRANSPARENT) {
      continue;
    }

    if (index < 0 || index >= art.palette.length) {
      throw new Error(
        `Invalid palette index ${index}. Palette contains ${art.palette.length} colors.`,
      );
    }
  }
}
