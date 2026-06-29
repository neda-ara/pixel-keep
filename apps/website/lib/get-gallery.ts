import * as Assets from "@pixel-keep/data";

export function getGallery() {
  const groups = new Map<string, (typeof Assets)[keyof typeof Assets][]>();

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
