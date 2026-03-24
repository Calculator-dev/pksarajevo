"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    name: "Olimpijski bazen Otoka",
    address: "Bulevar Meše Selimovića 89b, Sarajevo",
    schedule: [
      { days: "Utorak i Petak", time: "18:30 - 20:00" },
      { days: "Subota i Nedjelja", time: "11:00 - 12:30" },
    ],
    mapUrl: "https://maps.google.com/?q=Bulevar+Meše+Selimovića+89b+Sarajevo",
  },
  {
    name: "Hotel Hollywood, Ilidža",
    address: "Dr. Mustafe Pintola 23, Ilidža 71210",
    schedule: [
      { days: "Svaki radni dan osim Subotice", time: "14:00 - 19:00" },
    ],
    mapUrl: "https://maps.google.com/?q=Hotel+Hollywood+Ilidža",
  },
];

export function Locations() {
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
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
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
      id="lokacije"
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Gdje i kada treniramo?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Treniramo na dvije lokacije u Sarajevu. Odaberite termin koji vam
            najbolje odgovara.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground">{location.address}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {location.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4"
                  >
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">{item.days}</p>
                      <p className="text-primary text-lg font-semibold">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <MapPin className="w-4 h-4" />
                Prikaži na mapi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
