import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Navigation } from "@/components/navigation";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Gallery variant="full" />
      <Footer />
    </main>
  );
}
