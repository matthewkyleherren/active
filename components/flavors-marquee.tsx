"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MarqueeRowProps {
  text: string;
  color: string;
  inactiveColor: string;
  reverse?: boolean;
  isActive: boolean;
}

function MarqueeRow({
  text,
  color,
  inactiveColor,
  reverse = false,
  isActive,
}: MarqueeRowProps) {
  const items = Array.from({ length: 15 }, (_, i) => i);
  const displayColor = isActive ? color : inactiveColor;

  return (
    <div className="marquee-container relative overflow-hidden py-1">
      <div
        className={`marquee-track flex ${reverse ? "marquee-reverse" : "marquee-normal"}`}
        style={{
          animationDuration: "50s",
          animationPlayState: isActive ? "paused" : "running",
        }}
      >
        {items.map((i) => (
          <a
            key={i}
            href="#"
            style={{ color: displayColor }}
            className="font-sans font-bold text-9xl leading-[0.8] lg:text-huge whitespace-nowrap px-4 transition-colors duration-300 select-none"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}

export function FlavorsMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        if (p < 0.33) setActiveIndex(0);
        else if (p < 0.66) setActiveIndex(1);
        else setActiveIndex(2);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      data-scroll-section="flavors"
      className="flex items-center justify-center"
    >
      <div
        ref={sectionRef}
        className="flex flex-col w-full bg-white"
        style={{ height: "500svh" }}
      >
        <div className="h-svh sticky top-0 flex items-center justify-center flex-col">
          <MarqueeRow
            text="DROP"
            color="var(--color-drop)"
            inactiveColor="#eee"
            isActive={activeIndex === 0}
          />
          <MarqueeRow
            text="TRAIL"
            color="var(--color-trail)"
            inactiveColor="#eee"
            reverse
            isActive={activeIndex === 1}
          />
          <MarqueeRow
            text="RAD"
            color="var(--color-rad)"
            inactiveColor="#eee"
            isActive={activeIndex === 2}
          />
        </div>
      </div>
    </section>
  );
}
