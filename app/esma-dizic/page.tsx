import { FeaturedAthlete } from "@/components/featured-athlete";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function EsmaDizicPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FeaturedAthlete variant="full" />
      <Footer />
    </main>
  );
}
