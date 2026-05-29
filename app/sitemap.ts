import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site";

const routes = [
  "",
  "/dev",
  "/dev/projects",
  "/dev/blog",
  "/dev/logs",
  "/dev/system-design",
  "/youtube",
  "/writing",
  "/pte",
  "/pte/scores",
  "/pte/templates",
  "/life",
  "/life/timeline",
  "/board",
  "/ask",
  "/map",
  "/now",
  "/about"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-05-29")
  }));
}
