"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { clubValues } from "@/lib/club-data";
import { SectionLabel } from "@/components/lane-number";

export function About() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <>
      <div className="lane-rope" aria-hidden="true" />
      <section ref={ref} id="klub" className="shell scroll-mt-24 py-[clamp(72px,9vw,128px)]">
        <div className="flex flex-wrap items-start gap-x-16 gap-y-10">
          <div className="flex-[0_1_260px]" data-reveal>
            <SectionLabel lane="01" title="Klub" />
            <div aria-hidden="true" className="display text-outline mt-4 text-[clamp(140px,14vw,200px)] leading-[0.8]">
              01
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_560px]" data-reveal>
            <p className="font-display text-[clamp(40px,4.4vw,68px)] font-extrabold uppercase leading-[0.95] text-ink">
              Certificirani treneri, individualni pristup i jasan put —{" "}
              <span className="text-maroon">od prvog zaveslaja do postolja.</span>
            </p>
            <p className="mt-7 max-w-[680px] text-[19px] leading-[1.6] text-body">
              Plivački klub Sarajevo već devet godina vodi školu plivanja i takmičarski proces kluba.
              Kroz PKS je prošlo više od 1000 plivača, a 15 državnih rekorda u vitrini kluba dokaz je
              kvaliteta rada.
            </p>
          </div>
        </div>

        <div className="mt-[72px] grid grid-cols-1 border-t-[1.5px] border-ink sm:grid-cols-2 lg:grid-cols-4">
          {clubValues.map((value, i) => (
            <div
              key={value.title}
              data-reveal
              className={`pb-2 pr-7 pt-[26px] ${i > 0 ? "border-t border-hair sm:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:border-hair lg:pl-7" : ""
              }`}
            >
              <div className="font-mono text-xs font-bold text-maroon">/0{i + 1}</div>
              <h3 className="mb-2.5 mt-3.5 text-[22px] font-bold">{value.title}</h3>
              <p className="text-base leading-[1.6] text-subtle">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
