// A color in a palette.
export type PixelColor = string;

// Index into the palette. -1 represents a transparent pixel.
export type PixelIndex = number;

// Immutable palette for a piece of pixel art.
export type Palette = readonly PixelColor[];

// Shape authors use when creating an asset.
export interface PixelArtInput {
  id: string;
  name: string;
  width: number;
  height: number;
  palette: Palette;
  bitmap: string; // Human-readable bitmap.
  category: string;
  tags?: readonly string[]; // search keywords
}

// Parsed pixel art used by the renderer.
export interface PixelArt extends Omit<PixelArtInput, "bitmap"> {
  bitmap: string; // Original bitmap.
  pixels: readonly PixelIndex[]; // Parsed pixel indices.
}
