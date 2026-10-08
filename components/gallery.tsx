"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "@/components/lane-number";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
  isNew?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-2026-01.jpg",
    alt: "Plivačica PKS u crvenoj kapi pliva prsno",
    className: "md:col-span-2 md:row-span-2",
    isNew: true,
  },
  {
    src: "/images/gallery-2026-02.jpg",
    alt: "Plivačica PKS na treningu prsnog stila",
    isNew: true,
  },
  {
    src: "/images/gallery-2026-03.jpg",
    alt: "Mladi plivač PKS u bazenu",
    isNew: true,
  },
  {
    src: "/images/gallery-2026-05.jpg",
    alt: "Trenerica PKS radi sa najmlađim plivačima",
    className: "md:col-span-2",
    isNew: true,
  },
  {
    src: "/images/gallery-2026-04.jpg",
    alt: "Plivač PKS u crvenoj kapi i zelenim naočalama",
    isNew: true,
  },
  {
    src: "/images/gallery-2026-06.jpg",
    alt: "Plivačica PKS pliva leđno",
    isNew: true,
  },
  {
    src: "/images/gallery-2026-07.jpg",
    alt: "Plivačica PKS u crvenoj kapi tokom leđnog stila",
    className: "md:col-span-2",
    isNew: true,
  },
  {
    src: "/images/gallery-15.jpg",
    alt: "PKS takmičarska fotografija u vodi",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-18.jpg",
    alt: "Trening škole plivanja PKS",
    className: "md:col-span-2",
  },
  {
    src: "/images/gallery-02.jpg",
    alt: "PKS ekipa pored bazena",
  },
  {
    src: "/images/treneri.jpg",
    alt: "Trenerski tim PK Sarajevo u klupskim majicama",
  },
  {
    src: "/images/gallery-06.jpg",
    alt: "PKS plivačice sa medaljama",
  },
  {
    src: "/images/gallery-08.jpg",
    alt: "PKS plivači na pobjedničkom postolju",
  },
  {
    src: "/images/gallery-17.jpg",
    alt: "Djeca na treningu škole plivanja",
  },
  {
    src: "/images/gallery-16.jpg",
    alt: "Trener PKS na bazenu",
  },
  {
    src: "/images/gallery-05.jpg",
    alt: "PKS plivačica na bazenu",
  },
  {
    src: "/images/gallery-09.jpg",
    alt: "PKS plivačica uz bazen",
  },
  {
    src: "/images/gallery-10.jpg",
    alt: "PKS takmičari na bazenu",
  },
  {
    src: "/images/gallery-11.jpg",
    alt: "PKS plivačica sa peharom",
  },
  {
    src: "/images/gallery-12.jpg",
    alt: "PKS takmičarka sa nagradama",
  },
  {
    src: "/images/gallery-13.jpg",
    alt: "PKS grupa pored bazena",
  },
  {
    src: "/images/gallery-14.jpg",
    alt: "PKS plivačica u akciji",
    className: "md:col-span-2",
  },
  {
    src: "/images/gallery-01.jpg",
    alt: "PKS medalja i postolje",
  },
  {
    src: "/images/gallery-04.jpg",
    alt: "PKS vizual",
  },
  {
    src: "/images/gallery-07.jpg",
    alt: "PKS plivačica sa peharom",
  },
];

type GalleryProps = {
  variant?: "preview" | "full";
};

/** Mosaic rhythm: repeats every 5 photos. */
const tiles = [
  { flex: "flex-[2_1_520px]", h: "h-[clamp(260px,28vw,380px)]", sizes: "(min-width: 1024px) 50vw, 100vw" },
  { flex: "flex-[1_1_280px]", h: "h-[clamp(260px,28vw,380px)]", sizes: "(min-width: 1024px) 25vw, 100vw" },
  { flex: "flex-[1_1_280px]", h: "h-[300px]", sizes: "(min-width: 1024px) 25vw, 100vw" },
  { flex: "flex-[1.4_1_380px]", h: "h-[300px]", sizes: "(min-width: 1024px) 35vw, 100vw" },
  { flex: "flex-[1_1_280px]", h: "h-[300px]", sizes: "(min-width: 1024px) 25vw, 100vw" },
];

export function Gallery({ variant = "preview" }: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  useReveal(sectionRef);

  const isFullPage = variant === "full";
  const imagesToShow = isFullPage ? galleryImages : galleryImages.slice(0, 5);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        ref={sectionRef}
        id="galerija"
        className={`shell scroll-mt-24 ${isFullPage ? "min-h-screen py-[clamp(56px,7vw,104px)]" : "py-[clamp(72px,9vw,128px)]"}`}
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <SectionLabel lane="06" title="Galerija" />
            <h2 className={`display mt-4 ${isFullPage ? "text-[clamp(64px,9vw,144px)]" : "text-[clamp(56px,7vw,112px)]"}`}>
              Iz bazena
            </h2>
            {isFullPage && (
              <p className="mt-6 max-w-[560px] text-lg leading-[1.6] text-body">
                Takmičenja, treninzi i klupski trenuci. Kliknite na fotografiju za veći prikaz.
              </p>
            )}
          </div>
          {!isFullPage && (
            <Link href="/galerija" className="link-underline border-maroon text-ink">
              Cijela galerija →
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {imagesToShow.map((image, i) => {
            const tile = tiles[i % tiles.length];
            return (
              <button
                key={image.src}
                type="button"
                data-reveal
                onClick={() => setSelectedImage(image)}
                className={`group relative min-w-0 overflow-hidden rounded bg-tile text-left ${tile.flex} ${tile.h}`}
                aria-label={`Otvori fotografiju: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={tile.sizes}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {image.isNew && (
                  <span className="absolute left-3 top-3 rounded-sm bg-signal px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
                    Novo
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  {image.alt}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            aria-label="Zatvori pregled"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <div className="relative h-full max-h-[88vh] w-full" onClick={(event) => event.stopPropagation()}>
              <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" sizes="100vw" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
