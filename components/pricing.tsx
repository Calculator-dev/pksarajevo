"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: "Olimpijski bazen Otoka",
    description: "Grupni treninzi na olimpijskom bazenu",
    prices: [
      { label: "8x termina mjesečno", price: "60 KM" },
      { label: "12x termina mjesečno", price: "70 KM" },
      { label: "16x termina mjesečno", price: "80 KM" },
    ],
    features: [
      "Grupni treninzi",
      "Profesionalni treneri",
      "Sva oprema uključena",
      "Fleksibilni termini",
    ],
    popular: false,
  },
  {
    name: "Hotel Hollywood",
    description: "Premium lokacija u Ilidži",
    prices: [{ label: "Mjesečno", price: "50 KM/mjesečno" }],
    features: [
      "Moderni bazen",
      "Manje grupe",
      "Idealno za početnike",
      "Parking osiguran",
    ],
    popular: true,
  },
  {
    name: "Individualni treninzi",
    description: "Privatni sati sa trenerom",
    prices: [{ label: "Po satu", price: "30 KM (po dogovoru)" }],
    features: [
      "1 na 1 sa trenerom",
      "Personalizirani plan",
      "Fleksibilno vrijeme",
      "Brži napredak",
    ],
    popular: false,
  },
];

export function Pricing() {
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
        },
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
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cijene"
      className="py-24 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Cijene članarina
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transparentne cijene bez skrivenih troškova. Odaberite paket koji
            najbolje odgovara vašim potrebama.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Popularno
                  </span>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.prices.map((price, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-secondary/50 rounded-lg px-4 py-3"
                    >
                      <span className="text-muted-foreground text-sm">
                        {price.label}
                      </span>
                      <span className="text-foreground font-bold">
                        {price.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#kontakt"
                className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 mt-auto ${
                  plan.popular
                    ? "bg-primary hover:bg-accent text-primary-foreground"
                    : "bg-secondary hover:bg-muted text-secondary-foreground border border-border hover:border-primary/50"
                }`}
              >
                Kontaktirajte nas
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
