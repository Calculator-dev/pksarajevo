import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/news";
import { siteUrl } from "@/lib/site";
import { trainerProfiles } from "@/lib/trainers-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const pages = ["", "/novosti", "/esma-dizic", "/galerija"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [
    ...pages,
    ...trainerProfiles.map((t) => ({ url: `${siteUrl}/treneri/${t.slug}`, priority: 0.5 })),
    ...posts.map((post) => ({
      url: `${siteUrl}/novosti/${post.slug}`,
      lastModified: post.date,
      priority: 0.7,
    })),
  ];
}
