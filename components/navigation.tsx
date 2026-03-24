"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#o-nama", label: "O nama" },
  { href: "#treneri", label: "Treneri" },
  { href: "#programi", label: "Programi" },
  { href: "#lokacije", label: "Lokacije" },
  { href: "#cijene", label: "Cijene" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/pks-logo.jpg"
              alt="PKS Logo"
              width={50}
              height={50}
              className="rounded-lg shadow-md"
            />
            <span className={`text-lg font-bold hidden sm:block transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`}>
              Plivački klub Sarajevo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 text-sm font-medium ${
                  scrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="bg-primary hover:bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
            >
              Prijavi se
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-border shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="block bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg text-center font-medium transition-all duration-300 mt-4"
              >
                Prijavi se
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
