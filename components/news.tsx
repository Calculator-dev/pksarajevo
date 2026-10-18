"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/use-reveal";
import { formatDate, type NewsPost } from "@/lib/news-format";
import { SectionLabel } from "@/components/lane-number";

export function News({ posts }: { posts: NewsPost[] }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  if (posts.length === 0) return null;

  return (
    <section ref={ref} id="novosti" className="shell scroll-mt-24 py-[clamp(72px,9vw,128px)]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6" data-reveal>
        <div>
          <SectionLabel lane="04" title="Novosti" />
          <h2 className="display mt-4 text-[clamp(56px,7vw,112px)]">Iz bazena</h2>
        </div>
        <Link href="/novosti" className="link-underline border-maroon text-ink">
          Sve novosti →
        </Link>
      </div>

      <div className="flex flex-wrap gap-10">
        {posts.map((post, i) => {
          const lead = i === 0;
          const href = `/novosti/${post.slug}`;
          return (
            <article
              key={post.slug}
              data-reveal
              className={`group min-w-0 ${lead ? "flex-[1.5_1_520px]" : "flex-[1_1_340px]"}`}
            >
              <Link href={href} className="block overflow-hidden rounded" tabIndex={-1} aria-hidden="true">
                <div className={`relative w-full ${lead ? "h-[clamp(280px,32vw,440px)]" : "h-[300px]"}`}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes={lead ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
              <div className="mt-[22px] font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.category}
              </div>
              <h3
                className={`mb-3 mt-2.5 font-display font-extrabold uppercase leading-[0.95] ${
                  lead ? "text-[clamp(36px,3.4vw,52px)]" : "text-[38px]"
                }`}
              >
                <Link href={href} className="hover:text-maroon">
                  {post.title}
                </Link>
              </h3>
              <p className={`max-w-[640px] leading-[1.6] text-body ${lead ? "text-[17px]" : "text-base"}`}>{post.summary}</p>
              <Link href={href} className="link-underline mt-[18px] border-maroon text-ink">
                Pročitaj više →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
