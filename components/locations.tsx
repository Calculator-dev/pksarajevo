"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, Clock, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    name: "Hotel Hollywood",
    address: "Dr. Mustafe Pintola 23, Ilidža 71210",
    schedule: [
      {
        group: "Početnici",
        badge: "Škola plivanja",
        sessions: [
          { days: "Ponedjeljak, srijeda i petak", time: "17:30 - 18:30" },
          { days: "Subota", time: "09:00 - 10:00" },
        ],
      },
      {
        group: "Predtakmičari",
        badge: "Napredna škola",
        sessions: [
          {
            days: "Ponedjeljak, utorak, srijeda i petak",
            time: "18:30 - 20:30",
          },
        ],
      },
      {
        group: "Takmičari",
        badge: "Jutarnji termini",
        sessions: [
          { days: "Ponedjeljak, srijeda i petak", time: "07:00 - 08:30" },
          { days: "Subota", time: "09:00 - 11:00" },
          { days: "Nedjelja", time: "07:00 - 09:00" },
        ],
      },
      {
        group: "Takmičari",
        badge: "Večernji termini",
        sessions: [
          {
            days: "Ponedjeljak, utorak, srijeda i petak",
            time: "18:30 - 20:30",
          },
        ],
      },
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
            Svi treninzi se održavaju na jednoj lokaciji, sa jasno raspoređenim
            terminima po grupama.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-8">
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

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
                {location.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-secondary/50 p-5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-lg font-bold text-foreground">
                          {item.group}
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          {item.badge}
                        </p>
                      </div>
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        <CalendarDays className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.sessions.map((session, sessionIndex) => (
                        <div
                          key={sessionIndex}
                          className="flex items-start justify-between gap-4 rounded-xl bg-white/80 px-4 py-3"
                        >
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-foreground leading-relaxed">
                              {session.days}
                            </span>
                          </div>
                          <span className="text-sm sm:text-base font-semibold text-primary whitespace-nowrap">
                            {session.time}
                          </span>
                        </div>
                      ))}
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
