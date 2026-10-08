"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";
import { meets, type ResultRow } from "@/lib/club-data";
import { SectionLabel } from "@/components/lane-number";

const cols = "grid grid-cols-[64px_minmax(0,1.2fr)_minmax(0,1fr)_120px_minmax(0,1.2fr)] gap-4";

function Place({ place }: { place: ResultRow["place"] }) {
  if (place === "1" || place === "2" || place === "3") {
    const color = place === "1" ? "bg-signal" : place === "2" ? "bg-[#C9CED3]" : "bg-bronze";
    const label = place === "1" ? "Zlato" : place === "2" ? "Srebro" : "Bronza";
    return (
      <span className="inline-flex items-center gap-2 font-bold">
        <span className={`inline-block h-3 w-3 rounded-full ${color}`} aria-hidden="true" />
        {place}
        <span className="sr-only"> ({label})</span>
      </span>
    );
  }
  if (place === "LR") return <span className="text-xs font-bold" title="Lični rekord">LR</span>;
  return <span className="text-[#A89A9B]">—</span>;
}

export function Results() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="rezultati" className="scroll-mt-24 bg-ink py-[clamp(72px,9vw,128px)] text-white">
      <div className="shell">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8" data-reveal>
          <div>
            <SectionLabel lane="03" title="Rezultatska lista" tone="signal" />
            <h2 className="display mt-4 text-[clamp(56px,7vw,112px)]">
              Sezona
              <br />
              2026/27
            </h2>
          </div>
          <div className="flex flex-wrap gap-10">
            <div>
              <div className="display text-[96px] leading-[0.85] text-signal">6</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9BDBE]">Medalja u Subotici</div>
            </div>
            <div>
              <div className="display text-[96px] leading-[0.85]">30.76</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#C9BDBE]">50 m delfin · vrh Evrope</div>
            </div>
          </div>
        </div>

        {meets.map((meet, m) => (
          <div key={meet.name} data-reveal className={`border-t-2 border-white font-mono ${m > 0 ? "mt-12" : ""}`}>
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 py-[18px] text-xs uppercase tracking-[0.14em]">
              <h3 className="font-bold">{meet.name}</h3>
              <span className="text-[#C9BDBE]">
                {meet.date} · {meet.field}
              </span>
              <a href={meet.href} target="_blank" rel="noopener noreferrer" className="text-signal hover:underline">
                {meet.source} ↗
              </a>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[640px]" role="table" aria-label={`Rezultati: ${meet.name}`}>
                <div
                  role="row"
                  className={`${cols} border-b border-white/15 py-2.5 text-[11px] uppercase tracking-[0.14em] text-[#A89A9B]`}
                >
                  <span role="columnheader">Plas.</span>
                  <span role="columnheader">Plivač</span>
                  <span role="columnheader">Disciplina</span>
                  <span role="columnheader" className="text-right">Vrijeme</span>
                  <span role="columnheader">Napomena</span>
                </div>
                {meet.rows.map((r, i) => (
                  <div
                    key={r.swimmer + r.event}
                    role="row"
                    className={`${cols} items-center py-4 text-[15px] ${
                      i < meet.rows.length - 1 ? "border-b border-white/15" : ""
                    }`}
                  >
                    <span role="cell"><Place place={r.place} /></span>
                    <span role="cell" className="uppercase tracking-[0.04em]">{r.swimmer}</span>
                    <span role="cell">{r.event}</span>
                    <span
                      role="cell"
                      className={`text-right ${r.time ? "text-xl font-bold" : "text-[#A89A9B]"} ${r.highlight ? "text-signal" : ""}`}
                    >
                      {r.time ?? "—"}
                    </span>
                    <span role="cell" className="text-[#DDD3D4]">{r.note ?? ""}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A89A9B]">
          <p>LR = lični rekord · Na Jesenjem kupu nastupili su i Faruk i Vedad Avdić.</p>
          <Link href="/esma-dizic" className="link-underline border-signal font-sans text-[15px] text-white">
            Profil: Esma Dizić →
          </Link>
        </div>
      </div>
    </section>
  );
}
