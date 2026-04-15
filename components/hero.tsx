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
  const logoRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, delay: 0.3 }
    )
      .fromTo(
        logoRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.9"
      )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.5"
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
          src="/images/gallery-15.jpg"
          alt="PKS Sarajevo hero fotografija sa takmičarskog treninga"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/15 z-10" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div ref={logoRef} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-lg shadow-black/10">
              <Image
                src="/images/pks-logo.jpg"
                alt="PKS Logo"
                width={44}
                height={44}
                className="rounded-full"
                priority
              />
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
                PK Sarajevo
              </span>
            </div>
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
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-10 text-pretty leading-relaxed drop-shadow-md"
          >
            Već 9 godina gradimo plivače svih uzrasta kroz školu plivanja,
            napredni razvoj i takmičarski program.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
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
