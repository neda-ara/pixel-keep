import { Gallery } from "@/components/gallery/Gallery";
import { getGallery } from "@/lib/get-gallery";

export default function Home() {
  return <Gallery gallery={getGallery()} />;
}
