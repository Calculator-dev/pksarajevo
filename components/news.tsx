"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, Trophy, Users } from "lucide-react";

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

export function News() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="novosti"
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,28,55,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(140,28,55,0.08),transparent_35%)]" />

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
      </div>
    </section>
  );
}
