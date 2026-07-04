import type { PixelArtData } from "pixel-keep";

export interface GalleryGroup {
  category: string;
  assets: readonly PixelArtData[];
}
