import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GalaxyBackground from "@/components/GalaxyBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tausifali Saiyed | AI Trainer & Enterprise Architect",
  description:
    "Senior AI & Data Science Trainer, Full-Stack Developer, and Enterprise Architect based in Dubai. End-to-end training in AI, Web, and Mobile technologies.",

  openGraph: {
    title: "Tausifali Saiyed | AI Trainer & Enterprise Architect",
    description:
      "Senior AI & Data Science Trainer, Full-Stack Developer, and Enterprise Architect based in Dubai.",
    url: "https://www.tausifsaiyed.com",
    siteName: "Tausifali Saiyed",
    images: [
      {
        url: "https://www.tausifsaiyed.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tausifali Saiyed – AI Trainer & Enterprise Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tausifali Saiyed | AI Trainer & Enterprise Architect",
    description:
      "Senior AI & Data Science Trainer, Full-Stack Developer, and Enterprise Architect based in Dubai.",
    images: ["https://www.tausifsaiyed.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <GalaxyBackground />
        {children}
      </body>
    </html>
  );
}
