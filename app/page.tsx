import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { News } from "@/components/news";
import { FeaturedAthlete } from "@/components/featured-athlete";
import { Trainers } from "@/components/trainers";
import { Programs } from "@/components/programs";
import { Gallery } from "@/components/gallery";
import { Locations } from "@/components/locations";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <News />
      <FeaturedAthlete variant="preview" />
      <Trainers />
      <Programs />
      <Gallery variant="preview" />
      <Locations />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
