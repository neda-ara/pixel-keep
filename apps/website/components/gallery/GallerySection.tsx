import { formatCategory } from "@/lib/format-category";
import { GalleryCard } from "./GalleryCard";
import type { GalleryGroup } from "@/lib/gallery-types";

interface GallerySectionProps {
  group: GalleryGroup;
}

export function GallerySection({ group }: GallerySectionProps) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        {formatCategory(group.category)}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,200px))] justify-center gap-6">
        {group.assets.map((art) => (
          <GalleryCard key={art.id} art={art} />
        ))}
      </div>
    </section>
  );
}
