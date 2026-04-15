"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ExternalLink,
  PlayCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const esmaCoverageLinks = [
  {
    title: "Zlata i rekordi u Bratislavi",
    source: "Federalna",
    type: "Članak",
    date: "1. oktobar 2025.",
    description:
      "Prilog o četiri zlatne medalje i rekordima koje je Esma oborila na mitingu u Bratislavi.",
    href: "https://federalna.ba/zlata-i-rekordi-u-bratislavi-esma-dizic-je-nova-nada-bh-plivanja-ralxh",
    icon: ExternalLink,
  },
  {
    title: "FENA video prilog",
    source: "Agencija FENA",
    type: "Facebook video",
    date: "Medijski prilog",
    description:
      "Video priča o mladoj plivačici i njenim rezultatima kao jednoj od najboljih u Bosni i Hercegovini.",
    href: "https://www.facebook.com/Agencija.FENA/videos/mlada-pliva%C4%8Dica-pliva%C4%8Dkog-kluba-aquafit-iz-sarajeva-esma-dizi%C4%87-vi%C5%A1estruka-je-prv/876704325140854/",
    icon: PlayCircle,
  },
  {
    title: "YouTube prilog o uspjesima",
    source: "YouTube",
    type: "Video",
    date: "Video objava",
    description:
      "Kratki video pregled Esminih nastupa, rezultata i potencijala koji je svrstava među najveće nade bh. plivanja.",
    href: "https://youtu.be/yaPFk_kudtU?si=2tS55j7Kz3Xa_smg",
    icon: PlayCircle,
  },
  {
    title: "Prijem u uredu ministrice",
    source: "FMKS",
    type: "Objava",
    date: "16. januar 2026.",
    description:
      "Federalno ministarstvo kulture i sporta istaklo je Esmu kao bosanskohercegovački plivački dragulj.",
    href: "https://fmks.gov.ba/hr/bosanskohercegovacki-plivacki-dragulj-jedanaestogodisnja-esma-dizic-na-prijamu-u-uredu-ministrice-sanje-vlaisavljevic/",
    icon: ExternalLink,
  },
];

type FeaturedAthleteProps = {
  variant?: "preview" | "full";
};

export function FeaturedAthlete({
  variant = "preview",
}: FeaturedAthleteProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isFullPage = variant === "full";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="esma-dizic"
      className={`relative overflow-hidden bg-muted/30 ${
        isFullPage ? "min-h-screen py-28 sm:py-32" : "py-24 sm:py-32"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,28,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(30,144,255,0.08),transparent_32%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch"
        >
          <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-10 shadow-xl shadow-primary/5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-4">
              Izdvajamo
            </p>
            <h1
              className={`font-bold text-foreground mb-6 ${
                isFullPage ? "text-4xl sm:text-6xl" : "text-4xl sm:text-5xl"
              }`}
            >
              Esma Dizić
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty mb-6">
              Esma Dizić je naša najuspješnija takmičarka kluba i jedna od
              najboljih mladih plivačica u Bosni i Hercegovini. Prema prilogu
              Federalne od 1. oktobra 2025, na mitingu u Bratislavi osvojila je
              četiri zlatne medalje i oborila rekord Lane Pudar na 50 metara
              delfin, kao i rekord Iman Avdić na 100 metara slobodno.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
              FMKS je 16. januara 2026. Esmu opisao kao
              bosanskohercegovački plivački dragulj i istakao njene rezultate,
              podršku trenera Bakira Hadžiahmetovića i čak 15 oborenih rekorda u
              mlađekadetskoj kategoriji.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Award className="h-4 w-4" />
                4 zlata u Bratislavi
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Award className="h-4 w-4" />
                Rekord Lane Pudar
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Award className="h-4 w-4" />
                15 oborenih rekorda
              </span>
            </div>

            {!isFullPage && (
              <div className="mt-8">
                <Link
                  href="/esma-dizic"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent hover:gap-3"
                >
                  Pogledaj cijelu priču
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-xl shadow-primary/5 min-h-[420px] relative">
            <Image
              src="/images/gallery-07.jpg"
              alt="Esma Dizić sa peharom"
              fill
              className="object-cover"
              priority={isFullPage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-white/80 text-sm uppercase tracking-[0.24em] mb-2">
                PK Sarajevo
              </p>
              <p className="text-white text-2xl sm:text-3xl font-bold">
                Najbolja takmičarka kluba
              </p>
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isFullPage ? "xl:grid-cols-2" : "xl:grid-cols-4"
          } gap-4 mt-8`}
        >
          {esmaCoverageLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[1.75rem] border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                    {link.source}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      {link.type}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {link.date}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <link.icon className="h-6 w-6" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 text-balance">
                {link.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {link.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-primary font-semibold">
                Otvori objavu
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
