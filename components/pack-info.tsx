"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CARDS = [
  {
    image: "/images/trail-card.jpg",
    text: "Designed to follow you everywhere, combines practicality, strength and sustainability.",
  },
  {
    image: "/images/alu-card.jpg",
    text: 'Made of aluminum to be light to carry but sturdy at the same time; heavy duty, it does not fear falls or impacts. Other qualities? Aluminum keeps the drink safe: it protects from the sun\'s rays, preserves its qualities and keeps it fresh for longer. Last but not least, true to the motto "Leave No Trace" it is easily and infinitely recyclable.',
  },
  {
    image: "/images/screwcap-card.jpg",
    text: "The convenient and functional screw cap allows you to open and close it easily, without having to consume in one go, and once empty, it transforms into a water bottle or a practical case.",
  },
];

export function PackInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    // Initially stack all cards - first card visible, others below
    cards.forEach((card, i) => {
      gsap.set(card, {
        yPercent: i === 0 ? 0 : 100,
        opacity: i === 0 ? 1 : 0,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Animate each card in sequence
    for (let i = 1; i < cards.length; i++) {
      tl.to(
        cards[i],
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "none",
        },
        (i - 1) * 1.2
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div data-scroll-section="pack-info">
      <div ref={sectionRef} id="pack-info" className="h-[300svh] relative z-20">
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          <Image
            src="/images/pack-bg.jpg"
            alt="pack info background"
            fill
            className="object-cover"
            priority
          />
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="absolute inset-0 bottom-24 lg:bottom-0 m-auto w-[calc(100vw-16px)] h-[50vh] lg:w-[40vw] lg:h-[80vh]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 m-4 p-4 bg-gray backdrop-blur-[40px] rounded-lg">
                  <p className="text-black">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
