"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, delay: 0.3 }
    )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        statsRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="/images/team-hero.jpg"
          alt="PKS Team"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/20 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/pks-logo.jpg"
              alt="PKS Logo"
              width={160}
              height={160}
              className="rounded-2xl shadow-2xl shadow-black/30"
              priority
            />
          </div>

          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            <span className="block text-balance">Plivački klub</span>
            <span className="block text-white mt-2 [text-shadow:_0_0_30px_rgb(139_21_56_/_60%)]">Sarajevo</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed drop-shadow-md"
          >
            Zdrav život počinje u vodi. Pridružite se našem timu profesionalnih trenera
            i otkrijte radost plivanja.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#kontakt"
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
            >
              Pridruži se klubu
            </Link>
            <Link
              href="#o-nama"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Saznaj više
            </Link>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "8+", label: "Godina iskustva" },
              { number: "1000+", label: "Zadovoljnih plivača" },
              { number: "5", label: "Profesionalnih trenera" },
              { number: "2", label: "Lokacije" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
