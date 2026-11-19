import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://locro.com.ar";

  return [
    {
      url: siteUrl,
      lastModified: "2026-11-19",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
