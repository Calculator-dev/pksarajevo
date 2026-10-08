"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CalendarDays, Medal, Trophy, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: CalendarDays,
    value: "9 godina",
    label: "uspješnog rada škole plivanja i takmičarskog procesa",
  },
  {
    icon: Users,
    value: "1000+",
    label: "zadovoljnih plivača koji su prošli kroz PKS",
  },
  {
    icon: Trophy,
    value: "15",
    label: "državnih rekorda u vitrini kluba",
  },
];

export const newsArticles = [
  {
    date: "4. oktobar 2026.",
    source: "TVSA",
    href: "https://tvsa.ba/esma-dizic-11-iz-sarajeva-na-50-metara-delfin-stigla-na-sam-evropski-vrh/",
    title: "Esma Dizić na samom evropskom vrhu na 50 m delfin",
    summary:
      "Na međunarodnom mitingu „Plivački (re)START 2026“, na kojem je nastupilo 670 takmičara, Esma Dizić (11) pobijedila je u svojoj kategoriji na 50 m delfin vremenom 30.76 – rezultatom koji je trenutno svrstava na sam vrh Evrope među djevojčicama 2015. godišta. Odlično je plivala i Uma Mujan, koja je oborila četiri lična rekorda i sa 32.73 na 50 m delfin ušla među sedam najboljih Evropljanki svog uzrasta.",
    results: [
      "Esma Dizić – 50 m delfin 30.76 (1. mjesto)",
      "Esma Dizić – 50 m prsno 37.95",
      "Uma Mujan – 50 m slobodno 31.61",
      "Uma Mujan – 50 m delfin 32.73",
      "Uma Mujan – 50 m leđno 36.97",
    ],
  },
  {
    date: "27. septembar 2026.",
    source: "Federalna",
    href: "https://federalna.ba/odlicni-rezultati-plivackog-kluba-sarajevo-na-takmicenju-u-subotici-eown1",
    title: "Šest medalja na Jesenjem kupu Subotice",
    summary:
      "Pet plivača PKS-a – Esma Dizić, Uma Mujan, Vedad Ligata, Faruk Avdić i Vedad Avdić – nastupilo je na međunarodnom mitingu „Jesenji kup Subotice 2026“, gdje se takmičilo oko 370 plivača iz Srbije i BiH. Ekipa se vratila sa šest medalja i nizom ličnih rekorda, a Esma je sa dva zlata proglašena najuspješnijom takmičarkom 2015. godišta.",
    results: [
      "Esma Dizić – 2× zlato, najuspješnija u 2015. godištu",
      "Uma Mujan – zlato 100 m mješovito, bronza 100 m delfin",
      "Faruk Avdić – zlato 100 m leđno",
      "Vedad Ligata – bronza 100 m mješovito, 1:02.99 na 100 m slobodno",
    ],
  },
];

export function News() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

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
            duration: 0.6,
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (articlesRef.current) {
        gsap.fromTo(
          articlesRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: articlesRef.current,
              start: "top 85%",
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
      id="novosti"
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(115,4,11,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(115,4,11,0.08),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="bg-card border border-border rounded-3xl p-8 sm:p-10 lg:p-14 shadow-xl shadow-primary/5"
        >
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Novosti
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Devet godina rada pretočenih u rezultate
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Plivački klub Sarajevo već 9 godina uspješno vodi školu plivanja i
              takmičarski proces kluba. Naš tim certificiranih trenera sa
              međunarodnim licencama pruža kvalitetnu obuku za sve uzraste. Sa
              preko 1000+ zadovoljnih plivača, PKS je postao sinonim za
              kvalitetno plivanje u Sarajevu. 15 državnih rekorda u našoj vitrini
              dokaz je kvaliteta rada kluba kroz niz od 9 godina.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-secondary/50 p-6"
              >
                <item.icon className="w-7 h-7 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {item.value}
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={articlesRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12"
        >
          {newsArticles.map((article) => (
            <article
              key={article.href}
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-lg shadow-primary/5 transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm mb-5">
                <span className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground">
                  {article.source}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  {article.date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {article.summary}
              </p>

              <ul className="space-y-2 mb-8">
                {article.results.map((result) => (
                  <li key={result} className="flex items-start gap-2.5 text-foreground">
                    <Medal className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>

              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors"
              >
                Pročitaj cijeli članak na {article.source}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
