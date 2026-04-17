import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getTrainerBySlug, trainerProfiles } from "@/lib/trainers-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";

export function generateStaticParams() {
  return trainerProfiles.map((trainer) => ({ slug: trainer.slug }));
}

export default async function TrainerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);

  if (!trainer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-[72vh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={trainer.heroImage}
            alt={trainer.name}
            fill
            className={`object-cover ${trainer.heroImagePosition ?? "object-center"}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <Link
            href="/#treneri"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Nazad na trenere
          </Link>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70 mb-4">
              PK Sarajevo
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              {trainer.name}
            </h1>
            <p className="text-xl sm:text-2xl text-white/85 mb-6">
              {trainer.role}
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              {trainer.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {trainer.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                <Award className="h-4 w-4" />
                {highlight}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {trainer.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
