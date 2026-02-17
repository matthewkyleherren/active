"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  "Zero Alcohol",
  "Zero Coloring",
  "Zero Kcal",
  "Zero Sugar",
];

export function FeaturesCircle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        setRotation(self.progress * 360);
      },
    });
    return () => trigger.kill();
  }, []);

  const RADIUS = 260;
  const SVG_SIZE = 520;
  const VIEW_SCALE = SVG_SIZE / 570;

  return (
    <section data-scroll-section="features">
      <div ref={sectionRef} className="relative w-full h-[400svh]">
        <div className="sticky top-0 h-svh flex items-center justify-center overflow-hidden w-full">
          <div className="absolute top-10 lg:top-4 left-2 right-2 lg:left-auto lg:right-4 lg:max-w-xs bg-gray backdrop-blur-[40px] p-4 rounded-lg overflow-hidden z-20">
            <p>
              Activehop has been crafted with the goal of &quot;the rest is
              zero&quot;. 0 sugars, carbohydrates, fats and alcohol. The
              ingredients chosen are all of natural origin, without colorants to
              make the experience even purer and more genuine. All elements are
              naturally lactose-free and vegan friendly.
            </p>
          </div>

          <svg
            className="absolute inset-0 m-auto z-[1]"
            viewBox="-285 -285 570 570"
            style={{ width: SVG_SIZE, height: SVG_SIZE }}
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="0"
              cy="0"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {FEATURES.map((_, i) => {
              const baseAngle = (i / FEATURES.length) * 360 - 90;
              const angle = ((baseAngle + rotation) * Math.PI) / 180;
              const x = Math.cos(angle) * RADIUS;
              const y = Math.sin(angle) * RADIUS;
              return (
                <g key={i} transform={`translate(${x}, ${y})`}>
                  <line x1="-6" y1="0" x2="6" y2="0" stroke="black" strokeWidth="2" />
                  <line x1="0" y1="-6" x2="0" y2="6" stroke="black" strokeWidth="2" />
                </g>
              );
            })}
          </svg>

          {FEATURES.map((feature, i) => {
            const baseAngle = (i / FEATURES.length) * 360 - 90;
            const angle = ((baseAngle + rotation) * Math.PI) / 180;
            const x = Math.cos(angle) * RADIUS * VIEW_SCALE;
            const y = Math.sin(angle) * RADIUS * VIEW_SCALE;
            return (
              <div
                key={feature}
                className="absolute origin-center lg:w-42 select-none z-[2]"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="inline-flex w-full bg-gray backdrop-blur-[40px] text-black items-center justify-center px-3 py-3 rounded-full cursor-pointer transition-colors whitespace-nowrap">
                  <span className="uppercase text-sm">{feature}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
