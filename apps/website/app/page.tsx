import { getGallery } from "@/lib/get-gallery";
import { PixelArt } from "pixel-keep";

export default function Home() {
  const gallery = getGallery();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-7xl p-12">
        {gallery.map((group) => (
          <section key={group.category} className="mb-16">
            <h1 className="mb-6 text-3xl font-bold capitalize">
              {group.category}
            </h1>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6">
              {group.assets.map((art) => (
                <div key={art.id} className="flex flex-col items-center gap-3">
                  <PixelArt art={art} pixelSize={24} />

                  <h2 className="text-sm font-medium">{art.name}</h2>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
