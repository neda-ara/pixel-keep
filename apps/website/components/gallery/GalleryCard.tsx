import { PixelArt } from "pixel-keep";
import type { PixelArtData } from "pixel-keep";

interface GalleryCardProps {
  art: PixelArtData;
}

export function GalleryCard({ art }: GalleryCardProps) {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg border border-gray-200 p-4 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800">
      <div className="flex aspect-square w-full items-center justify-center">
        <PixelArt art={art} pixelSize={4} fit={120} />
      </div>
      <div className="mt-4 text-center">
        <h2 className="font-medium">{art.name}</h2>
      </div>
    </div>
  );
}
