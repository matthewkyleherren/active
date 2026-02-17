"use client";

import { Logo } from "./logo";

const FOOTER_LINKS = [
  { label: "Contacts", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Shipping Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Credits", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full p-2 lg:p-4">
      <nav
        className="bg-gray backdrop-blur-[40px] justify-between text-black p-4 rounded-xl flex gap-4"
        role="navigation"
      >
        <div className="grid lg:grid-cols-6 gap-1 lg:gap-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              className="uppercase link"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="w-[80px]">
          <Logo />
        </div>
      </nav>
    </footer>
  );
}
