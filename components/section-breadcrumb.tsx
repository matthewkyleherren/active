"use client";

const SECTIONS = [
  { id: "intro", label: "Outdoor Inside" },
  { id: "flavors", label: "Flavors" },
  { id: "features", label: "Target Zero" },
  { id: "benefits", label: "Flower Power" },
  { id: "product-nutrition", label: "Fit for purpose" },
  { id: "pack-info", label: "Ready to go" },
];

export function SectionBreadcrumb({
  activeSection = "intro",
}: {
  activeSection?: string;
}) {
  const active = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];

  return (
    <div className="fixed top-2 left-2 right-2 lg:right-auto lg:top-4 lg:left-4 z-50 lg:max-w-xs">
      <div className="flex items-center gap-1 blurred-bg p-2 lg:p-4 rounded-xl">
        <span className="uppercase font-sans">ACTIVEHOP</span>
        <span className="uppercase whitespace-nowrap">
          {">"} {active.label}
        </span>
      </div>
    </div>
  );
}
