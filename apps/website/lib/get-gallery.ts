import * as Assets from "@pixel-keep/data";
import type { GalleryGroup } from "./gallery-types";
import type { PixelArtData } from "pixel-keep";

export function getGallery(): readonly GalleryGroup[] {
  const groups = new Map<string, PixelArtData[]>();

  for (const asset of Object.values(Assets)) {
    const assets = groups.get(asset.category);

    if (assets) {
      assets.push(asset);
    } else {
      groups.set(asset.category, [asset]);
    }
  }

  return [...groups.entries()].map(([category, assets]) => ({
    category,
    assets,
  }));
}
