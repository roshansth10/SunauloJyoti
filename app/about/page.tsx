import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ProductionProcess from "@/components/about/ProductionProcess";
import MissionVision from "@/components/about/MissionVision";
import OurPromise from "@/components/about/OurPromise";

export const metadata: Metadata = {
  title: "About Us | Sunaulo Jyoti",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProductionProcess />
      <MissionVision />
      <OurPromise />
    </>
  );
}
