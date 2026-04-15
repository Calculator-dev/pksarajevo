"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  linkovi: [
    { label: "Početna", href: "#" },
    { label: "O nama", href: "#o-nama" },
    { label: "Novosti", href: "#novosti" },
    { label: "Esma Dizić", href: "/esma-dizic" },
    { label: "Programi", href: "#programi" },
    { label: "Galerija", href: "/galerija" },
    { label: "Treneri", href: "#treneri" },
  ],
  kontakt: [
    { label: "Lokacije", href: "#lokacije" },
    { label: "Cijene", href: "#cijene" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/pks-logo.jpg"
                alt="PKS Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">PKS</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Plivački klub Sarajevo već 9 godina uspješno vodi školu plivanja i
              takmičarski proces kluba za sve uzraste.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Linkovi</h4>
            <ul className="space-y-3">
              {footerLinks.linkovi.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Info</h4>
            <ul className="space-y-3">
              {footerLinks.kontakt.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +387 62 831 421
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  infopksarajevo@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Plivački klub Sarajevo. Sva prava
              zadržana.
            </p>
            <p className="text-muted-foreground text-sm">
              Dizajnirano sa ❤️ u Sarajevu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
