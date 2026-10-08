"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";
import { pool, programs } from "@/lib/club-data";
import { SectionLabel } from "@/components/lane-number";

export function Programs() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="programi" className="scroll-mt-24 bg-tile py-[clamp(72px,9vw,120px)]">
      <div className="shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <SectionLabel lane="02" title="Programi, termini i cijene" />
            <h2 className="display mt-4 text-[clamp(56px,7vw,112px)] text-ink">Izaberi svoju stazu</h2>
          </div>
          <p className="max-w-[380px] text-base leading-[1.6] text-body">
            Svi treninzi održavaju se na bazenu hotela {pool.name},{" "}
            <a href={pool.mapUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
              {pool.address}
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {programs.map((p) => {
            const dark = !!p.featured;
            return (
              <article
                key={p.lane}
                data-reveal
                className={`overflow-hidden rounded ${dark ? "bg-ink text-white" : "bg-white text-ink"}`}
              >
                <div className={dark ? "lane-rope-dark" : "lane-rope-thin"} aria-hidden="true" />
                <div className="flex flex-wrap items-start gap-x-10 gap-y-6 px-[clamp(20px,3vw,40px)] py-8">
                  <div
                    aria-hidden="true"
                    className={`display w-24 flex-none text-[120px] leading-[0.8] ${dark ? "text-signal" : "text-maroon"}`}
                  >
                    {p.lane}
                  </div>

                  <div className="min-w-0 flex-[1_1_300px]">
                    <div className={`font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-[#C9BDBE]" : "text-subtle"}`}>
                      {p.meta}
                    </div>
                    <h3 className="mb-2.5 mt-2 font-display text-[44px] font-extrabold uppercase leading-[0.95]">
                      <span className="sr-only">Staza {p.lane}: </span>
                      {p.name}
                    </h3>
                    <p className={`text-base leading-[1.6] ${dark ? "text-[#DDD3D4]" : "text-body"}`}>{p.description}</p>
                  </div>

                  <dl className="min-w-0 flex-[1_1_260px] font-mono text-sm leading-normal">
                    {p.schedule.map((s, i) => (
                      <div
                        key={s.days + s.time}
                        className={`flex justify-between gap-3 py-2.5 ${
                          i < p.schedule.length - 1 ? (dark ? "border-b border-white/15" : "border-b border-hair") : ""
                        }`}
                      >
                        <dt>{s.days}</dt>
                        <dd className="font-bold">{s.time}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-[0_1_200px] flex-col items-start gap-3.5">
                    <div>
                      <span className="font-display text-[56px] font-black leading-none">{p.price}</span>{" "}
                      <span className={`font-mono text-[13px] ${dark ? "text-[#C9BDBE]" : "text-subtle"}`}>{p.unit}</span>
                    </div>
                    <Link
                      href="#kontakt"
                      className={`link-underline text-[15px] ${dark ? "border-signal text-white" : "text-maroon"}`}
                    >
                      {p.cta} →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
