import { formatCategory } from "@/lib/format-category";
import { GalleryCard } from "@/components/GalleryCard";
import { getGallery } from "@/lib/get-gallery";

export default function Home() {
  const gallery = getGallery();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-7xl p-12">
        {gallery.map((group) => (
          <section key={group.category} className="mb-16">
            <h1 className="mb-6 text-3xl font-bold">
              {formatCategory(group.category)}
            </h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
              {group.assets.map((art) => (
                <GalleryCard key={art.id} art={art} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
