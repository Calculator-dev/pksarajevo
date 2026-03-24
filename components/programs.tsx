"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Baby, Gauge, Medal, School, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: Baby,
    title: "Škola plivanja",
    description:
      "Za djecu i odrasle koji žele savladati osnove plivanja. Individualni pristup i garantirani rezultati.",
    features: ["Sve uzraste", "Individualni pristup", "Certificirani treneri"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: School,
    title: "Napredna škola plivanja",
    description:
      "Za one koji žele usavršiti tehniku plivanja i pripremiti se za takmičenja.",
    features: ["Usavršavanje tehnike", "Kondicijska priprema", "Mentorstvo"],
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Gauge,
    title: "Individualni treninzi",
    description:
      "Privatni sati sa trenerom za maksimalne rezultate u kratkom vremenu.",
    features: ["1 na 1 pristup", "Fleksibilno vrijeme", "Personalizirani plan"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Medal,
    title: "Takmičarski program",
    description:
      "Za plivače koji žele postići vrhunske rezultate na domaćim i međunarodnim takmičenjima.",
    features: ["Profesionalna priprema", "Takmičenja", "Stipendije"],
    color: "from-accent/20 to-accent/5",
  },
];

export function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
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
      id="programi"
      className="py-24 sm:py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Naši programi
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Odaberite program koji najbolje odgovara vašim potrebama i ciljevima.
            Svaki program je pažljivo dizajniran za optimalne rezultate.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                >
                  Saznaj više
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
