"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { SectionBreadcrumb } from "@/components/section-breadcrumb";
import { HeroSection } from "@/components/hero-section";
import { FlavorsMarquee } from "@/components/flavors-marquee";
import { FeaturesCircle } from "@/components/features-circle";
import { BenefitsSection } from "@/components/benefits-section";
import { NutritionSection } from "@/components/nutrition-section";
import { PackInfo } from "@/components/pack-info";
import { Footer } from "@/components/footer";

const ThreeCanvas = dynamic(
  () => import("@/components/three-canvas").then((mod) => mod.ThreeCanvas),
  { ssr: false }
);

const SECTION_IDS = [
  "intro",
  "flavors",
  "features",
  "benefits",
  "product-nutrition",
  "pack-info",
];

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(
    null
  );

  const updateScrollState = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;
    setScrollProgress(progress);

    // Determine active section
    const sections = SECTION_IDS.map((id) => {
      const el = document.querySelector(`[data-scroll-section="${id}"]`);
      return { id, el };
    }).filter((s) => s.el);

    for (let i = sections.length - 1; i >= 0; i--) {
      const rect = sections[i].el!.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    let raf: number;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      lenis.on("scroll", () => {
        updateScrollState();
      });

      function animate(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      }
      raf = requestAnimationFrame(animate);
    };

    initLenis();

    // Initial state
    updateScrollState();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      lenisRef.current?.destroy();
    };
  }, [updateScrollState]);

  return (
    <>
      <ThreeCanvas scrollProgress={scrollProgress} />
      <SectionBreadcrumb activeSection={activeSection} />
      <Header />
      <main ref={mainRef}>
        <div>
          <HeroSection />
          <FlavorsMarquee />
          <FeaturesCircle />
          <BenefitsSection />
          <NutritionSection />
          <PackInfo />
          <Footer />
          <div className="h-svh w-full flex items-center justify-center z-[1] select-none">
            <div className="overflow-hidden rounded-[20px] w-[calc(100vw-16px)] h-[calc(100vh-16px-108px)] lg:w-[calc(100vw-28px)] lg:h-[calc(100vh-28px)] bg-[#f5f5f0]" />
          </div>
        </div>
      </main>
    </>
  );
}
