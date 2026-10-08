import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Results } from "@/components/results";
import { News } from "@/components/news";
import { TrainersOverview } from "@/components/trainers-overview";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Results />
      <News />
      <TrainersOverview />
      <Gallery variant="preview" />
      <Contact />
      <Footer />
    </main>
  );
}
