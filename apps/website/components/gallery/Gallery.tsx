import { GallerySection } from "./GallerySection";
import type { GalleryGroup } from "@/lib/gallery-types";

interface GalleryProps {
  gallery: readonly GalleryGroup[];
}

export function Gallery({ gallery }: GalleryProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {gallery.map((group) => (
            <GallerySection key={group.category} group={group} />
          ))}
        </div>
      </main>
    </div>
  );
}
