import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SectionLabel } from "@/components/lane-number";
import { formatDate, getAllPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "Novosti — PK Sarajevo",
  description:
    "Novosti Plivačkog kluba Sarajevo: rezultati s takmičenja, medalje i rekordi naših plivača, te vijesti iz kluba.",
  alternates: {
    canonical: "/novosti",
    types: { "application/rss+xml": "/novosti/rss.xml" },
  },
  openGraph: {
    title: "Novosti — PK Sarajevo",
    description: "Rezultati, medalje i vijesti iz Plivačkog kluba Sarajevo.",
    url: "/novosti",
    type: "website",
  },
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="shell py-[clamp(48px,7vw,104px)]">
        <SectionLabel lane="04" title="Novosti" />
        <h1 className="display mt-4 text-[clamp(64px,9vw,152px)] text-maroon">Novosti</h1>
        <p className="mt-6 max-w-[620px] text-[clamp(17px,1.4vw,20px)] leading-[1.55] text-body">
          Rezultati s takmičenja, uspjesi naših plivača i vijesti iz kluba.
        </p>

        {posts.length === 0 ? (
          <p className="mt-16 text-body">Uskoro objavljujemo prve novosti.</p>
        ) : (
          <div className="mt-[clamp(40px,5vw,72px)] grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="group min-w-0">
                <Link href={`/novosti/${post.slug}`} className="block overflow-hidden rounded" tabIndex={-1} aria-hidden="true">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.category}
                </div>
                <h2 className="mb-3 mt-2.5 font-display text-[34px] font-extrabold uppercase leading-[0.95]">
                  <Link href={`/novosti/${post.slug}`} className="hover:text-maroon">
                    {post.title}
                  </Link>
                </h2>
                <p className="leading-[1.6] text-body">{post.summary}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
