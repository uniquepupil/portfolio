import type { MetadataRoute } from "next";

import { caseStudies } from "@/lib/data";

const siteUrl = "https://www.uniquepupil.in";
const staticRoutes = [
  "",
  "/privacy-policy.html",
  "/terms-and-conditions.html",
  "/cancellation-and-refund.html",
  "/shipping-and-delivery.html",
  "/contact-us.html"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.6
  }));

  const projectPages: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...pages, ...projectPages];
}
