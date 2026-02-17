"use client";

import { useState } from "react";

const BENEFITS = [
  {
    title: "Antioxidant properties",
    description:
      "Rich in antioxidants that help fight free radicals and oxidative stress.",
    source:
      'Masteikova, R., et al. (2014). "Antioxidant activity of hop (Humulus lupulus) extracts." Food Chemistry.',
  },
  {
    title: "Anti-inflammatory properties",
    description:
      "Contains compounds that may help reduce inflammation in the body.",
    source:
      'Lee, C., et al. (2014). "Anti-inflammatory and antioxidant properties of hop (Humulus lupulus) extracts." Journal of Clinical Biochemistry and Nutrition.',
  },
  {
    title: "Antifungal and antibacterial action",
    description:
      "Natural compounds in hops have antimicrobial properties.",
    source:
      'Frantov\u00e1, M., et al. (2017). "Antimicrobial properties of hop (Humulus lupulus) extracts." Journal of Food Science and Technology.',
  },
  {
    title: "Digestive system support",
    description:
      "It can help improve digestion, reducing bloating and abdominal discomfort. It also stimulates the production of gastric juices, promoting better assimilation of nutrients.",
    source: "Medicinal Plants of the World (Rohde et al., 2015).",
  },
  {
    title: "Calming and relaxing properties",
    description:
      "Known for its sedative effects that can help reduce anxiety and improve sleep quality.",
    source:
      'Huang, J., et al. (2014). "Effects of hop (Humulus lupulus) extract on sleep quality in a randomized controlled trial." Phytotherapy Research.',
  },
  {
    title: "Heart Benefits",
    description:
      "May help support cardiovascular health through multiple mechanisms.",
    source:
      'Zhang, L., et al. (2015). "Cardioprotective effects of hop (Humulus lupulus) extract in hyperlipidemic rats." Phytomedicine.',
  },
  {
    title: "Hormonal Support",
    description:
      "Contains phytoestrogens that may help balance hormones in some individuals.",
    source:
      'Gauthier, A., et al. (2009). "Estrogenic properties of hop (Humulus lupulus) and its compounds." Journal of Steroid Biochemistry and Molecular Biology.',
  },
];

export function BenefitsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="flower-power"
      data-scroll-section="benefits"
      className="h-[400svh] relative"
    >
      <div className="sticky top-0 h-svh flex items-center justify-center overflow-hidden w-full">
        <div className="absolute top-10 lg:top-4 left-2 right-2 lg:left-auto lg:right-4 lg:max-w-xs bg-gray backdrop-blur-[40px] p-4 rounded-lg overflow-hidden z-20">
          <div>
            <div className="mb-6">
              <p>
                Hops extract, thanks to flavonoids and alpha and beta acids, is
                known for its many beneficial properties, which support physical
                and mental health. Here are some of them.
              </p>
            </div>
            <div className="space-y-1 pointer-events-auto">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="benefit-accordion">
                  <button
                    className="w-full text-left py-0 flex items-center gap-2 uppercase text-gray-400 cursor-pointer"
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  >
                    <span>{benefit.title}</span>
                    <span
                      className="transition-transform duration-300"
                      style={{
                        transform:
                          openIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    >
                      {">"}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      height: openIndex === i ? "auto" : 0,
                      opacity: openIndex === i ? 1 : 0,
                    }}
                  >
                    <div className="pl-8 py-2">{benefit.description}</div>
                    <div className="pl-4 py-2 text-gray-600 text-sm">
                      {benefit.source}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
