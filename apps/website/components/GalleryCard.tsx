import { PixelArt } from "pixel-keep";
import type { PixelArtData } from "pixel-keep";

interface GalleryCardProps {
  art: PixelArtData;
}

export function GalleryCard({ art }: GalleryCardProps) {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-gray-200 p-4 transition-transform hover:-translate-y-1 hover:shadow-md">
      <PixelArt art={art} pixelSize={24} />
      <div className="text-center">
        <h2 className="font-medium">{art.name}</h2>
        <p className="text-sm text-gray-500">{art.id}</p>
      </div>
    </div>
  );
}
