"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { NewsImage } from "@/lib/news-format";

/** Photo grid under a news post, with a full-screen viewer (arrows / keyboard to browse). */
export function PostGallery({ images }: { images: NewsImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const count = images.length;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((delta: number) => setIndex((i) => (i === null ? i : (i + delta + count) % count)), [count]);

  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  if (count === 0) return null;
  const selected = index === null ? null : images[index];

  return (
    <>
      <section aria-label="Galerija" className="shell pb-[clamp(40px,5vw,72px)]">
        <h2 className="display mb-8 text-[clamp(40px,4.6vw,72px)]">Galerija</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative aspect-square overflow-hidden rounded bg-tile"
              aria-label={`Otvori fotografiju: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </section>

      {selected && index !== null && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            aria-label="Zatvori pregled"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-4">
            <div className="relative w-full flex-1" onClick={(event) => event.stopPropagation()}>
              <Image src={selected.src} alt={selected.alt} fill className="object-contain" sizes="100vw" />
            </div>
            <div
              className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.12em] text-white"
              onClick={(event) => event.stopPropagation()}
            >
              {count > 1 && (
                <button type="button" onClick={() => step(-1)} className="rounded-full bg-white/10 p-3 hover:bg-white/20" aria-label="Prethodna fotografija">
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <span>
                {index + 1} / {count}
              </span>
              {count > 1 && (
                <button type="button" onClick={() => step(1)} className="rounded-full bg-white/10 p-3 hover:bg-white/20" aria-label="Sljedeća fotografija">
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
