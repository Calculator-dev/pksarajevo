"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const galleryImages = [
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

export function Gallery({ variant = "preview" }: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null);

  const isFullPage = variant === "full";
  const imagesToShow = isFullPage ? galleryImages : galleryImages.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.06,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
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
        className={`relative overflow-hidden ${isFullPage ? "min-h-screen py-28 sm:py-32" : "py-24 sm:py-32"} bg-background`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,28,55,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(33,118,170,0.08),transparent_30%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={titleRef} className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-4">
              Galerija
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Takmičenja, treninzi i klupski trenuci
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {isFullPage
                ? "Kliknite na bilo koju fotografiju da je otvorite u većem prikazu i lakše pregledate detalje."
                : "Kratki pregled naših najljepših trenutaka. Za puni prikaz otvorite kompletnu galeriju."}
            </p>
          </div>

          <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isFullPage ? "auto-rows-[260px] md:auto-rows-[260px]" : "auto-rows-[240px] md:auto-rows-[220px]"}`}
          >
            {imagesToShow.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm text-left ${image.className ?? ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
                    Otvori fotografiju
                  </span>
                </div>
              </button>
            ))}
          </div>

          {!isFullPage && (
            <div className="mt-10 flex justify-center">
              <Link
                href="/galerija"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent hover:gap-3"
              >
                Pogledaj cijelu galeriju
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] bg-black/88 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 sm:right-8 sm:top-8 z-10 rounded-full bg-white/12 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Zatvori pregled"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <div
              className="relative w-full h-full max-h-[88vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
