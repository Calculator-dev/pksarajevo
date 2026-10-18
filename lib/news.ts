import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { formatDate, type NewsImage, type NewsPost, type NewsPostWithBody } from "@/lib/news-format";

/**
 * News posts live as Markdown files in content/novosti and are edited through
 * the admin panel (/admin, see public/admin/config.yml). The file name is the URL slug.
 */
const NEWS_DIR = path.join(process.cwd(), "content", "novosti");

export { formatDate, type NewsImage, type NewsPost, type NewsPostWithBody };

function toIsoDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

/** `gallery` entries are `{ image, alt }` from the admin panel; a plain path string is accepted too. */
function toGallery(value: unknown, title: string): NewsImage[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === "string" ? { image: item } : (item ?? {})))
    .filter((item) => item.image)
    .map((item, i) => ({
      src: String(item.image),
      alt: String(item.alt || `${title} — fotografija ${i + 1}`),
    }));
}

function readPost(file: string): (NewsPostWithBody & { draft: boolean }) | null {
  const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (!data.title || !data.date) return null;

  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title),
    date: toIsoDate(data.date),
    category: String(data.category ?? "Klub"),
    summary: String(data.summary ?? ""),
    image: String(data.image || "/images/hero-2026.jpg"),
    imageAlt: String(data.imageAlt || data.title),
    source: data.source ? String(data.source) : undefined,
    sourceUrl: data.sourceUrl ? String(data.sourceUrl) : undefined,
    draft: Boolean(data.draft),
    gallery: toGallery(data.gallery, String(data.title)),
    html: marked.parse(content, { async: false }),
  };
}

function loadAll() {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p): p is NonNullable<typeof p> => p !== null && !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Published posts, newest first, without the rendered body. */
export function getAllPosts(): NewsPost[] {
  return loadAll().map(({ html, gallery, draft, ...post }) => post);
}

export function getPostBySlug(slug: string): NewsPostWithBody | undefined {
  const post = loadAll().find((p) => p.slug === slug);
  if (!post) return undefined;
  const { draft, ...rest } = post;
  return rest;
}
