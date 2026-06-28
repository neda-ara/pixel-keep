/**
 * A color in a palette.
 */
export type PixelColor = string;

/**
 * Index into the palette.
 * -1 represents a transparent pixel.
 */
export type PixelIndex = number;

/**
 * Immutable palette for a piece of pixel art.
 */
export type Palette = readonly PixelColor[];

/**
 * Core representation of a pixel art asset.
 */
export interface PixelArt {
  /**
   * Unique identifier.
   * Example: "flower"
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Width in pixels.
   */
  width: number;

  /**
   * Height in pixels.
   */
  height: number;

  /**
   * Palette used by this artwork.
   *
   * pixels[i] refers to palette[index].
   */
  palette: Palette;

  /**
   * Flat pixel array.
   *
   * Length must equal width × height.
   *
   * -1 = transparent
   */
  pixels: readonly PixelIndex[];

  /**
   * Category shown in the docs website.
   */
  category: string;

  /**
   * Search tags.
   */
  tags?: readonly string[];
}
