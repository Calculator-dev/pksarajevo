"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";
import { newsArticles } from "@/lib/club-data";
import { SectionLabel } from "@/components/lane-number";

export { newsArticles };

export function News() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="novosti" className="shell scroll-mt-24 py-[clamp(72px,9vw,128px)]">
      <div className="mb-12" data-reveal>
        <SectionLabel lane="04" title="Novosti" />
        <h2 className="display mt-4 text-[clamp(56px,7vw,112px)]">Iz medija</h2>
      </div>

      <div className="flex flex-wrap gap-10">
        {newsArticles.map((article, i) => {
          const lead = i === 0;
          return (
            <article
              key={article.href}
              data-reveal
              className={`group min-w-0 ${lead ? "flex-[1.5_1_520px]" : "flex-[1_1_340px]"}`}
            >
              <a href={article.href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded" tabIndex={-1} aria-hidden="true">
                <div className={`relative w-full ${lead ? "h-[clamp(280px,32vw,440px)]" : "h-[300px]"}`}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes={lead ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
              <div className="mt-[22px] font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                {article.date} · {article.source}
              </div>
              <h3
                className={`mb-3 mt-2.5 font-display font-extrabold uppercase leading-[0.95] ${
                  lead ? "text-[clamp(36px,3.4vw,52px)]" : "text-[38px]"
                }`}
              >
                {article.title}
              </h3>
              <p className={`max-w-[640px] leading-[1.6] text-body ${lead ? "text-[17px]" : "text-base"}`}>{article.summary}</p>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-[18px] border-maroon text-ink"
              >
                {article.cta} ↗
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
