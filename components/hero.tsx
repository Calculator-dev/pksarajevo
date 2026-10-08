"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clubStats } from "@/lib/club-data";
import { CrestWatermark } from "@/components/crest-watermark";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-line", { yPercent: 105 }, { yPercent: 0, duration: 0.9, stagger: 0.09 })
        .fromTo(".hero-fade", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, "-=0.45")
        .fromTo(".hero-crest", { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" }, 0)
        .fromTo(".hero-board", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="vrh" className="relative isolate overflow-hidden bg-white">
      <CrestWatermark className="hero-crest" />
      <div className="shell relative grid grid-cols-1 gap-x-[clamp(32px,4vw,72px)] gap-y-10 pb-[clamp(40px,5vw,72px)] pt-[clamp(40px,5vw,72px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]">
      {/* Copy */}
      <div className="flex min-w-0 flex-col justify-between gap-12">
        <div>
          <div className="hero-fade label-mono mb-7 flex items-center gap-3 text-maroon">
            <span className="inline-block h-0.5 w-9 bg-maroon" />
            Škola plivanja · Napredna škola · Takmičari
          </div>

          <h1 className="display flex flex-col gap-[0.06em] text-[clamp(64px,7.6vw,140px)] leading-[0.98] tracking-[-0.005em] text-maroon">
            <span className="block overflow-hidden pt-[0.04em] pb-[0.02em]"><span className="hero-line block">Zdrav život</span></span>
            <span className="block overflow-hidden pt-[0.04em] pb-[0.02em]"><span className="hero-line block">počinje</span></span>
            <span className="block overflow-hidden pt-[0.04em] pb-[0.02em]">
              <span className="hero-line block text-outline [--stroke-w:2.5px]">u vodi.</span>
            </span>
          </h1>

          <p className="hero-fade mt-8 max-w-[520px] text-[clamp(18px,1.5vw,21px)] leading-[1.55] text-body">
            Već devet godina gradimo plivače svih uzrasta — od prvog zaveslaja u školi plivanja do
            postolja na međunarodnim mitinzima.
          </p>

          <div className="hero-fade mt-9 flex flex-wrap gap-3.5">
            <Link
              href="#kontakt"
              className="group inline-flex items-center gap-2.5 rounded-full bg-maroon px-7 py-[18px] text-base font-bold text-white transition-colors hover:bg-maroon-deep"
            >
              Upiši dijete
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#programi"
              className="inline-flex items-center rounded-full border-[1.5px] border-ink px-[26px] py-[18px] text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Termini i cijene
            </Link>
          </div>
        </div>

        <div className="hero-fade flex flex-wrap border-t-[1.5px] border-ink">
          {clubStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-[1_1_96px] pt-[18px] ${i === 0 ? "pr-5" : "border-l border-hair px-5"} ${
                i === clubStats.length - 1 ? "pr-0" : ""
              }`}
            >
              <div className={`font-display text-[56px] font-extrabold leading-none ${stat.accent ? "text-maroon" : "text-ink"}`}>
                {stat.value}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo + timing board */}
      <div className="relative min-h-[460px] min-w-0 overflow-hidden rounded-md bg-[#0E2A33] sm:min-h-[600px] lg:min-h-[680px]">
        <Image
          src="/images/hero-2026.jpg"
          alt="Plivačica PK Sarajevo pliva prsno"
          fill
          priority
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover object-[68%_center]"
        />
        <div
          aria-hidden="true"
          className="display text-outline absolute right-6 top-6 text-[140px] leading-[0.8] [--stroke-c:rgba(255,255,255,0.85)]"
        >
          4
        </div>

        <div className="hero-board absolute bottom-[clamp(16px,3vw,32px)] left-[clamp(16px,3vw,32px)] right-[clamp(16px,3vw,32px)] max-w-[560px] overflow-hidden rounded-md bg-ink font-mono text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <div className="flex flex-wrap justify-between gap-3 bg-maroon px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]">
            <span>Plivački (re)START 2026</span>
            <span>50 m delfin · Ž 2015.</span>
          </div>
          <div className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3.5 border-b border-white/10 px-4 py-3.5">
            <span className="text-[22px] font-bold text-signal">1</span>
            <span className="truncate text-[15px] uppercase tracking-[0.06em] sm:text-base">
              Dizić Esma <span className="opacity-55">· PKS</span>
            </span>
            <span className="text-[26px] font-bold tracking-[0.02em] text-signal sm:text-[30px]">30.76</span>
          </div>
          <div className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3.5 px-4 py-3.5">
            <span className="text-[13px] font-bold opacity-80">LR</span>
            <span className="truncate text-[15px] uppercase tracking-[0.06em] sm:text-base">
              Mujan Uma <span className="opacity-55">· PKS</span>
            </span>
            <span className="text-[26px] font-bold tracking-[0.02em] sm:text-[30px]">32.73</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
