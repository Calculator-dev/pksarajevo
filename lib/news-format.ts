/** Client-safe news types and helpers (lib/news.ts reads the files and is server-only). */
export type NewsPost = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  source?: string;
  sourceUrl?: string;
};

export type NewsImage = { src: string; alt: string };

export type NewsPostWithBody = NewsPost & { html: string; gallery: NewsImage[] };

/** 2026-10-04 → 04.10.2026, the format used across the site. */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
