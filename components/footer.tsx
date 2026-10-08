import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/club-data";

const links = [
  { label: "Programi", href: "/#programi" },
  { label: "Rezultati", href: "/#rezultati" },
  { label: "Treneri", href: "/#treneri" },
  { label: "Galerija", href: "/galerija" },
  { label: "Esma Dizić", href: "/esma-dizic" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="lane-rope" aria-hidden="true" />
      <div className="shell pt-14">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image src="/images/pks-logo.png" alt="Grb PK Sarajevo" width={54} height={72} className="h-[72px] w-auto" />
            <div className="text-[15px] leading-[1.6] text-[#C9BDBE]">
              Plivački klub Sarajevo
              <br />
              Hotel Hollywood, Ilidža
              <br />
              <a href={contactInfo.phoneHref} className="text-white hover:underline">{contactInfo.phone}</a>
              {" · "}
              <a href={`mailto:${contactInfo.email}`} className="text-white hover:underline">{contactInfo.email}</a>
            </div>
          </div>
          <nav aria-label="Podnožje" className="flex flex-wrap gap-x-8 gap-y-2 text-[15px] font-semibold">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-2.5 text-white transition-opacity hover:opacity-70">
                {l.label}
              </Link>
            ))}
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="py-2.5 hover:opacity-70">Facebook ↗</a>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="py-2.5 hover:opacity-70">Instagram ↗</a>
          </nav>
        </div>

        <div
          aria-hidden="true"
          className="display text-outline mt-12 whitespace-nowrap text-[clamp(64px,17vw,260px)] leading-[0.8] tracking-[-0.01em] [--stroke-c:rgba(255,255,255,0.35)] [--stroke-w:1.5px]"
        >
          PK Sarajevo
        </div>

        <div className="flex flex-wrap justify-between gap-3 pb-8 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[#A89A9B]">
          <span>© {new Date().getFullYear()} Plivački klub Sarajevo</span>
          <span>Zdrav život počinje u vodi</span>
        </div>
      </div>
    </footer>
  );
}
