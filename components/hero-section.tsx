"use client";

export function HeroSection() {
  return (
    <div className="main-hero">
      <div className="h-[200vh]">
        <div
          id="main-hero"
          className="sticky top-0 left-0 w-full h-screen z-[1] flex items-center justify-center"
        >
          <div className="overflow-hidden rounded-[20px] w-full h-full relative select-none">
            <div className="absolute z-10 bottom-4 lg:bottom-0 uppercase left-0 right-0 text-center" />
            <div className="overflow-hidden h-full w-full bg-[#f5f5f0]" />
          </div>
        </div>
        <div className="relative z-10 lg:p-48 pointer-events-none p-2">
          <div
            data-scroll-section="intro"
            className="h-svh flex flex-col items-center justify-end"
          >
            <div className="max-w-2xl text-center sticky bottom-20 lg:bottom-12">
              Composed of a few natural elements. Designed to quench your thirst
              with pleasure thanks to the subtle herbaceous and bitter note
              characteristic of hops. It transmits a sensation of purity that
              recalls the very essence of spring water, but enriched by a charge
              of natural freshness that makes it unique. It is a drink that
              offers an unexpected sensory experience designed for those looking
              for natural but not banal, rich but not artificial flavors
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
