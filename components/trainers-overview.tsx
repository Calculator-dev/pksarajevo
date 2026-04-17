"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { trainerProfiles } from "@/lib/trainers-data";

gsap.registerPlugin(ScrollTrigger);

export function TrainersOverview() {
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
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
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
      id="treneri"
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Naši treneri
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Naš stručni tim čine certificirani treneri sa međunarodnim
            licencama, posvećeni kvalitetnom radu, individualnom pristupu i
            sigurnom napretku svakog plivača.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainerProfiles.map((trainer) => (
            <div
              key={trainer.slug}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 overflow-hidden">
                <User className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {trainer.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {trainer.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {trainer.shortDescription}
              </p>
              <Link
                href={`/treneri/${trainer.slug}`}
                className="mt-auto inline-flex items-center justify-center gap-2 text-primary font-semibold"
              >
                Pogledaj profil
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
