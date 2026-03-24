"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Heart, Target, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Target,
    title: "Individualni pristup",
    description:
      "Svaki plivač dobiva personalizirani program treninga prilagođen njegovim sposobnostima i ciljevima.",
  },
  {
    icon: Users,
    title: "Stručni tim",
    description:
      "Naši treneri posjeduju međunarodne licence i višegodišnje iskustvo u radu sa plivačima svih uzrasta.",
  },
  {
    icon: Award,
    title: "Dokazani rezultati",
    description:
      "Ponosni smo na uspjehe naših članova na domaćim i međunarodnim takmičenjima.",
  },
  {
    icon: Heart,
    title: "Ljubav prema sportu",
    description:
      "Vjerujemo da plivanje nije samo sport, već način života koji donosi zdravlje i radost.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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

      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
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
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
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
      id="o-nama"
      className="py-24 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Ko smo mi?
          </h2>
          <div ref={contentRef} className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Plivački klub Sarajevo već 8 godina uspješno vodi škole i
              takmičarske ekipe plivanja. Naš tim certificiranih trenera sa
              međunarodnim licencama pruža kvalitetnu obuku za sve uzraste.
              Sa preko 1000+ zadovoljnih plivača, PKS je postao sinonim za
              kvalitetno plivanje u Sarajevu.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
