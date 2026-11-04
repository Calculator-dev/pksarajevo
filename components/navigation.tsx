"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { programs } from "@/lib/club-data";

const navLinks = [
  { href: "/#klub", label: "Klub" },
  { href: "/#programi", label: "Programi i cijene" },
  { href: "/#rezultati", label: "Rezultati" },
  { href: "/esma-dizic", label: "Esma Dizić" },
  { href: "/novosti", label: "Novosti" },
  { href: "/#treneri", label: "Treneri" },
  { href: "/galerija", label: "Galerija" },
];

const schoolLinks = [
  ...programs.map((p) => ({ href: `/#program-${p.lane}`, label: p.name, meta: p.meta })),
  { href: "/#kontakt", label: "Upis", meta: "Prijavi dijete u školu plivanja" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [mobileSchoolOpen, setMobileSchoolOpen] = useState(false);
  const schoolRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) =>
    !href.startsWith("/#") && (pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!schoolOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!schoolRef.current?.contains(e.target as Node)) setSchoolOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSchoolOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [schoolOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setSchoolOpen(false);
    setMobileSchoolOpen(false);
  };

  return (
    <>
      {/* Ticker */}
      <div className="bg-ink text-white font-mono text-[12px] uppercase tracking-[0.08em]">
        <div className="shell flex flex-wrap items-center gap-x-7 gap-y-2 py-2.5">
          <span className="inline-flex items-center gap-2 font-bold text-signal">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
            Iz bazena
          </span>
          <span>
            Esma Dizić · 50 m delfin · <b className="text-signal">30.76</b> · vrh Evrope (2015.)
          </span>
          <span className="hidden md:inline opacity-60">/</span>
          <span className="hidden md:inline">
            Jesenji kup Subotice · <b className="text-signal">6 medalja</b>
          </span>
          <span className="hidden lg:inline opacity-60">/</span>
          <span className="hidden lg:inline">Sljedeći start: Sarajevo, 50 m bazen</span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-shadow duration-300 ${
          scrolled ? "border-hair shadow-[0_8px_24px_rgba(22,10,11,0.06)]" : "border-hair"
        }`}
      >
        <nav className="shell flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-3.5 text-ink" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/pks-logo.png"
              alt="Grb PK Sarajevo"
              width={42}
              height={56}
              className="h-14 w-auto"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[30px] font-black uppercase tracking-[0.02em] text-maroon">
                PK Sarajevo
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                Plivački klub · Sarajevo
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 text-[15px] font-semibold xl:gap-7">
            <div
              ref={schoolRef}
              className="relative"
              onMouseEnter={() => setSchoolOpen(true)}
              onMouseLeave={() => setSchoolOpen(false)}
            >
              <div
                className={`flex items-center gap-1 border-b-2 transition-colors ${
                  schoolOpen ? "border-maroon text-maroon" : "border-transparent text-ink"
                }`}
              >
                <Link href="/#programi" onClick={closeAll} className="py-3 hover:text-maroon">
                  Škola plivanja
                </Link>
                <button
                  type="button"
                  onClick={() => setSchoolOpen((v) => !v)}
                  aria-expanded={schoolOpen}
                  aria-haspopup="true"
                  aria-label={schoolOpen ? "Zatvori meni Škola plivanja" : "Otvori meni Škola plivanja"}
                  className="py-3 hover:text-maroon"
                >
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform ${schoolOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {schoolOpen && (
                <div className="absolute left-0 top-full z-50 pt-2">
                  <ul className="w-72 overflow-hidden rounded border border-hair bg-white py-2 shadow-[0_16px_40px_rgba(22,10,11,0.12)]">
                    {schoolLinks.map((item) => (
                      <li key={item.href + item.label}>
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="block px-5 py-3 transition-colors hover:bg-tile hover:text-maroon"
                        >
                          <span className="block text-ink">{item.label}</span>
                          <span className="mt-0.5 block font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-subtle">
                            {item.meta}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`border-b-2 py-3 transition-colors hover:text-maroon ${
                  isActive(link.href) ? "border-maroon text-maroon" : "border-transparent text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              className="rounded-full bg-maroon px-[22px] py-[13px] text-white transition-colors hover:bg-maroon-deep"
            >
              Upiši dijete
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden -mr-2 p-3 text-ink"
            aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden border-t border-hair bg-white">
            <div className="shell flex flex-col py-4">
              <div
                className={`flex items-center justify-between border-b border-hair font-display text-3xl font-extrabold uppercase ${
                  mobileSchoolOpen ? "text-maroon" : "text-ink"
                }`}
              >
                <Link href="/#programi" onClick={closeAll} className="flex-1 py-4">
                  Škola plivanja
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileSchoolOpen((v) => !v)}
                  aria-expanded={mobileSchoolOpen}
                  aria-label={mobileSchoolOpen ? "Zatvori podmeni" : "Otvori podmeni"}
                  className="-mr-2 p-4"
                >
                  <ChevronDown
                    size={26}
                    aria-hidden="true"
                    className={`transition-transform ${mobileSchoolOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {mobileSchoolOpen && (
                <div className="flex flex-col border-b border-hair py-2 pl-4">
                  {schoolLinks.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      onClick={closeAll}
                      className="py-3 text-lg font-semibold text-ink hover:text-maroon"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`border-b border-hair py-4 font-display text-3xl font-extrabold uppercase ${
                    isActive(link.href) ? "text-maroon" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#kontakt"
                onClick={() => setIsOpen(false)}
                className="mt-6 rounded-full bg-maroon px-6 py-4 text-center font-semibold text-white"
              >
                Upiši dijete
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
