import { HomeCapabilities } from "@/components/home/capabilities";
import { HomeCtaBanner } from "@/components/home/cta-banner";
import { HomeFeatured } from "@/components/home/featured";
import { HomeHero } from "@/components/home/hero";
import { HomeJourneys } from "@/components/home/journeys";
import { HomeProcess } from "@/components/home/process";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeJourneys />
      <HomeProcess />
      <HomeCapabilities />
      <HomeFeatured />
      <HomeCtaBanner />
    </>
  );
}
