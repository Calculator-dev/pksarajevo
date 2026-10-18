import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/news";
import { siteName, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/novosti/${post.slug}`;
  return {
    title: `${post.title} — PK Sarajevo`,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: "article",
      publishedTime: post.date,
      siteName,
      locale: "bs_BA",
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.summary,
    image: [`${siteUrl}${post.image}`],
    datePublished: post.date,
    mainEntityOfPage: `${siteUrl}/novosti/${post.slug}`,
    author: { "@type": "Organization", name: "Plivački klub Sarajevo", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Plivački klub Sarajevo",
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/pks-logo.png` },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <article>
        <header className="shell pt-[clamp(40px,5vw,72px)]">
          <Link href="/novosti" className="label-mono inline-flex items-center gap-2 text-maroon hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Sve novosti
          </Link>
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-subtle">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.category}
          </div>
          <h1 className="display mt-4 max-w-[1100px] text-[clamp(48px,6.4vw,104px)] text-maroon">{post.title}</h1>
          <p className="mt-6 max-w-[760px] text-[clamp(18px,1.5vw,21px)] leading-[1.55] text-body">{post.summary}</p>
        </header>

        <div className="shell mt-[clamp(32px,4vw,56px)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1360px) 1248px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="shell py-[clamp(40px,5vw,72px)]">
          <div className="article-body mx-auto max-w-[720px]" dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.sourceUrl && (
            <p className="mx-auto mt-10 max-w-[720px] border-t border-hair pt-6 text-body">
              Izvor:{" "}
              <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-maroon underline underline-offset-4">
                {post.source ?? post.sourceUrl} ↗
              </a>
            </p>
          )}
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-hair bg-tile">
          <div className="shell py-[clamp(48px,6vw,88px)]">
            <h2 className="display text-[clamp(40px,4.6vw,72px)]">Još novosti</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
              {others.map((p) => (
                <Link key={p.slug} href={`/novosti/${p.slug}`} className="group block">
                  <div className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                    <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.category}
                  </div>
                  <h3 className="mt-2.5 font-display text-[30px] font-extrabold uppercase leading-[0.95] group-hover:text-maroon">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
