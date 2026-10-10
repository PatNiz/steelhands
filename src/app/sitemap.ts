import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/produkty",
    "/produkcja-na-zamowienie",
    "/realizacje",
    "/dla-firm",
    "/o-nas",
    "/kontakt",
    "/zamow-wycenie",
    ...projects.map((project) => `/realizacje/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" || route === "/zamow-wycenie" ? 1 : 0.7,
  }));
}
