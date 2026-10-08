"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { CrestWatermark } from "@/components/crest-watermark";
import { SectionLabel } from "@/components/lane-number";
import { esmaBests, esmaCoverage, esmaStats, esmaTimeline } from "@/lib/esma-data";

export function AthleteProfile() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".ap-crest", { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" }, 0)
        .fromTo(".ap-line", { yPercent: 105 }, { yPercent: 0, duration: 0.9, stagger: 0.1 }, 0)
        .fromTo(".ap-fade", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 0.4)
        .fromTo(".ap-board", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-white">
        <CrestWatermark className="ap-crest" />
        <div className="shell relative grid grid-cols-1 gap-x-[clamp(32px,4vw,72px)] gap-y-10 py-[clamp(40px,5vw,72px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex min-w-0 flex-col justify-between gap-12">
            <div>
              <Link href="/#rezultati" className="ap-fade label-mono mb-7 inline-flex items-center gap-3 text-maroon hover:underline">
                <span className="inline-block h-0.5 w-9 bg-maroon" />
                Izdvajamo · Takmičarka PKS
              </Link>
              <h1 className="display text-[clamp(84px,11vw,188px)] leading-[0.82] text-maroon">
                <span className="block overflow-hidden pb-[0.04em]"><span className="ap-line block">Esma</span></span>
                <span className="block overflow-hidden pb-[0.04em]">
                  <span className="ap-line block text-outline [--stroke-w:2.5px]">Dizić</span>
                </span>
              </h1>
              <p className="ap-fade mt-8 max-w-[560px] text-[clamp(18px,1.5vw,21px)] leading-[1.55] text-body">
                Najuspješnija takmičarka kluba i jedna od najboljih mladih plivačica u Bosni i
                Hercegovini. Sa 11 godina i vremenom 30.76 na 50 m delfin trenutno je na samom
                evropskom vrhu svog godišta.
              </p>
              <div className="ap-fade mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px] uppercase tracking-[0.12em] text-ink">
                <span><span className="text-subtle">Godište</span> 2015.</span>
                <span><span className="text-subtle">Disciplina</span> Delfin</span>
                <span>
                  <span className="text-subtle">Trener</span>{" "}
                  <Link href="/treneri/bakir-hadziahmetovic" className="underline underline-offset-4 hover:text-maroon">
                    Bakir Hadžiahmetović
                  </Link>
                </span>
              </div>
            </div>

            <div className="ap-fade grid grid-cols-2 border-t-[1.5px] border-ink sm:grid-cols-4">
              {esmaStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`pb-1 pr-4 pt-[18px] ${i % 2 === 1 ? "border-l border-hair pl-5" : ""} ${
                    i === 2 ? "sm:border-l sm:border-hair sm:pl-5" : ""
                  } ${i >= 2 ? "border-t border-hair sm:border-t-0" : ""}`}
                >
                  <div className={`font-display text-[clamp(44px,4.4vw,60px)] font-extrabold leading-none ${s.accent ? "text-maroon" : "text-ink"}`}>
                    {s.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] uppercase leading-snug tracking-[0.1em] text-subtle">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo + PB board */}
          <div className="relative min-h-[520px] min-w-0 overflow-hidden rounded-md bg-ink sm:min-h-[640px] lg:min-h-[720px]">
            <Image
              src="/images/gallery-07.jpg"
              alt="Esma Dizić s peharom i medaljom"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-[center_30%]"
            />
            <div
              aria-hidden="true"
              className="display text-outline absolute right-5 top-5 text-[120px] leading-[0.8] [--stroke-c:rgba(255,255,255,0.9)]"
            >
              11
            </div>
            <div className="ap-board absolute bottom-[clamp(16px,3vw,28px)] left-[clamp(16px,3vw,28px)] right-[clamp(16px,3vw,28px)] overflow-hidden rounded-md bg-ink font-mono text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="flex justify-between gap-3 bg-maroon px-4 py-2.5 text-[11px] uppercase tracking-[0.14em]">
                <span>Lični rekordi</span>
                <span>Dizić Esma · PKS</span>
              </div>
              {esmaBests.map((b, i) => (
                <div
                  key={b.event}
                  className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3.5 px-4 py-3.5 ${
                    i < esmaBests.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block text-[15px] uppercase tracking-[0.06em]">{b.event}</span>
                    <span className="block text-[11px] uppercase tracking-[0.1em] text-white/55">{b.note}</span>
                  </span>
                  <span className={`text-[28px] font-bold tracking-[0.02em] ${b.highlight ? "text-signal" : ""}`}>{b.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="lane-rope" aria-hidden="true" />

      {/* ---------- TIMELINE ---------- */}
      <section className="bg-ink py-[clamp(72px,9vw,128px)] text-white">
        <div className="shell">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <SectionLabel lane="01" title="Put do vrha" tone="signal" />
              <h2 className="display mt-4 text-[clamp(56px,7vw,112px)]">Dužina po dužina</h2>
            </div>
            <p className="max-w-[380px] text-base leading-[1.6] text-[#DDD3D4]">
              Od rekorda u Bratislavi do evropskog vrha — najvažniji trenuci posljednjih sezona.
            </p>
          </div>

          <ol className="relative">
            {esmaTimeline.map((t, i) => (
              <li
                key={t.date}
                data-reveal
                className="grid grid-cols-[minmax(0,1fr)] gap-x-10 gap-y-3 border-t border-white/20 py-8 md:grid-cols-[180px_minmax(0,1fr)_auto]"
              >
                <div className="font-mono">
                  <div className={`text-xl font-bold ${t.current ? "text-signal" : ""}`}>{t.date}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#A89A9B]">{t.place}</div>
                </div>
                <div className="min-w-0">
                  <h3 className="hyphens-auto font-display text-[clamp(32px,3.2vw,48px)] font-extrabold uppercase leading-[0.95] [overflow-wrap:anywhere]">
                    <span className="mr-3 font-mono text-sm font-bold text-signal align-middle">/{String(i + 1).padStart(2, "0")}</span>
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-[720px] text-base leading-[1.6] text-[#DDD3D4]">{t.text}</p>
                </div>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start font-mono text-xs uppercase tracking-[0.14em] text-signal hover:underline md:pt-2"
                >
                  {t.source} ↗
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- MEDIA ---------- */}
      <section className="shell py-[clamp(72px,9vw,128px)]">
        <div className="mb-12" data-reveal>
          <SectionLabel lane="02" title="U medijima" />
          <h2 className="display mt-4 text-[clamp(56px,7vw,112px)]">Pisali su o Esmi</h2>
        </div>
        <ul className="border-b-[1.5px] border-ink">
          {esmaCoverage.map((c) => (
            <li key={c.href} data-reveal>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-2 border-t-[1.5px] border-ink py-6 transition-colors hover:bg-tile sm:grid-cols-[200px_minmax(0,1fr)_160px_auto] sm:px-2"
              >
                <span className="col-span-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-maroon sm:col-span-1">
                  {c.source}
                </span>
                <span className="font-display text-[clamp(28px,2.8vw,40px)] font-extrabold uppercase leading-[0.95] text-ink">
                  {c.title}
                </span>
                <span className="hidden font-mono text-xs uppercase tracking-[0.12em] text-subtle sm:block">
                  {c.date ? `${c.type} · ${c.date}` : c.type}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition-colors group-hover:border-maroon group-hover:bg-maroon group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative isolate overflow-hidden bg-maroon text-white">
        <div className="shell flex flex-wrap items-end justify-between gap-10 py-[clamp(64px,8vw,112px)]">
          <div data-reveal>
            <div className="label-mono text-blush">Sljedeća generacija</div>
            <h2 className="display mt-4 text-[clamp(64px,8vw,136px)] leading-[0.84]">
              Svaki šampion
              <br />
              <span className="text-outline [--stroke-c:#fff]">počinje u školi.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3.5" data-reveal>
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-[18px] text-base font-bold text-maroon transition-colors hover:bg-signal hover:text-ink"
            >
              Upiši dijete
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#programi"
              className="inline-flex items-center rounded-full border-[1.5px] border-white px-[26px] py-[18px] text-base font-bold text-white transition-colors hover:bg-white hover:text-maroon"
            >
              Programi i cijene
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
