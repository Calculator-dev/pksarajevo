"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";
import { trainerProfiles } from "@/lib/trainers-data";
import { SectionLabel } from "@/components/lane-number";

export function TrainersOverview() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="treneri" className="scroll-mt-24 bg-maroon py-[clamp(72px,9vw,128px)] text-white">
      <div className="shell">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <SectionLabel lane="05" title="Treneri" tone="blush" />
            <h2 className="display mt-4 text-[clamp(56px,7vw,112px)]">Ljudi na ivici bazena</h2>
          </div>
          <p className="max-w-[380px] text-base leading-[1.6] text-blush">
            Certificirani treneri s međunarodnim licencama i iskustvom u radu s djecom svih uzrasta.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
          {trainerProfiles.map((trainer, i) => (
            <article key={trainer.slug} data-reveal className="group">
              <Link href={`/treneri/${trainer.slug}`} className="block" aria-label={`Profil: ${trainer.name}`}>
                <div className="relative h-[420px] overflow-hidden rounded bg-maroon-deep">
                  <Image
                    src={trainer.heroImage}
                    alt={trainer.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top contrast-[1.05] grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute left-3.5 top-3.5 rounded-sm bg-white px-3 pb-1 pt-1.5 font-display text-[34px] font-black leading-none text-maroon">
                    0{i + 1}
                  </div>
                </div>
              </Link>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-blush">{trainer.role}</div>
              <h3 className="mb-2.5 mt-1.5 font-display text-[38px] font-extrabold uppercase leading-[0.95]">
                {trainer.name}
              </h3>
              <p className="text-[15px] leading-[1.6] text-blush">{trainer.shortDescription}</p>
              <Link href={`/treneri/${trainer.slug}`} className="link-underline mt-3.5 text-white">
                Profil →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
