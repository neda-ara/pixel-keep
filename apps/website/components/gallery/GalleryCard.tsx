import { PixelArtPreview } from "./PixelArtPreview";
import type { PixelArtData } from "pixel-keep";

interface GalleryCardProps {
  art: PixelArtData;
}

export function GalleryCard({ art }: GalleryCardProps) {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg border border-gray-200 p-4 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800">
      <PixelArtPreview art={art} />
      <div className="mt-4 text-center">
        <h2 className="font-medium">{art.name}</h2>
      </div>
    </div>
  );
}
