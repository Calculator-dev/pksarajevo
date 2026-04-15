"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Baby, Medal, School, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: Baby,
    title: "Škola plivanja",
    description:
      "Za djecu od 3 i po godine do 14 godina starosti. Individualni pristup i garantirani rezultati.",
    features: ["Uzrast 3,5 do 14 godina", "Individualni pristup", "Sigurno savladavanje osnova"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: School,
    title: "Napredna škola",
    description:
      "Za one koji žele usavršiti elementarne osnove plivačkih tehnika kraula, prsnog, leđnog i delfin stila.",
    features: ["Kraul", "Prsno, leđno i delfin", "Priprema za predtakmičarski nivo"],
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Medal,
    title: "Takmičarski program",
    description:
      "Za plivače koji prođu predtakmičarski program i koji žele ići na međunarodna i domaća takmičenja.",
    features: ["Predtakmičarski prelaz", "Domaća takmičenja", "Međunarodna takmičenja"],
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
            Programi su postavljeni kao jasan razvojni put od prvih zaveslaja do
            takmičarskog bazena.
          </p>
        </div>

        <div className="mb-10 rounded-3xl border border-border bg-secondary/40 p-5 sm:p-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-5">
            {programs.map((program, index) => (
              <div key={program.title} className="flex items-center gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
                  {program.title}
                </span>
                {index < programs.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
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
