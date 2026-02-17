import type { Metadata, Viewport } from "next";
import { Sora, Lekton } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lekton = Lekton({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ActiveHop - Sparkling Hop Water | Outdoor Inside",
  description:
    "Experience ActiveHop premium sparkling hop water. Three unique flavors: Drop, Rad, and Trail. Zero calories, natural ingredients, and functional benefits designed for outdoor enthusiasts and active lifestyles.",
  openGraph: {
    title: "ActiveHop - Sparkling Hop Water | Outdoor Inside",
    description:
      "Experience ActiveHop premium sparkling hop water. Three unique flavors: Drop, Rad, and Trail. Zero calories, natural ingredients, and functional benefits designed for outdoor enthusiasts and active lifestyles.",
    type: "website",
    siteName: "ActiveHop",
  },
  twitter: {
    card: "summary_large_image",
    title: "ActiveHop - Sparkling Hop Water | Outdoor Inside",
    description:
      "Experience ActiveHop premium sparkling hop water. Three unique flavors: Drop, Rad, and Trail. Zero calories, natural ingredients, and functional benefits designed for outdoor enthusiasts and active lifestyles.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${lekton.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
