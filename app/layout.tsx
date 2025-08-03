import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Akillabs",
  description:
    "Full-Stack Developer building scalable AI-powered web experiences. Crafting seamless digital products with React, Django, and cutting-edge GenAI tools — currently working remotely from India.",
  generator: "Next.js",
  applicationName: "Akil A",
  keywords: [
    "full-stack developer",
    "genai developer",
    "react",
    "django",
    "ai engineer",
    "frontend",
    "backend",
    "portfolio",
    "ai portfolio",
    "creative developer",
    "scalable web apps",
    "india",
    "akillabs",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "AkilLabs",
    description:
      "Full-Stack Developer building scalable AI-powered web experiences. Crafting seamless digital products with React, Django, and cutting-edge GenAI tools — currently working remotely from India.",
    url: "https://www.AkilLabs.me/",
    siteName: "www.AkilLabs.me",
    images: [
      {
        url: "https://www.akillabs.tech/Coverimage.png",
        width: 1200,
        height: 630,
        alt: "AkilLabs",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AkilLabs",
    description:
      "Full-Stack Developer building scalable AI-powered web experiences. Crafting seamless digital products with React, Django, and cutting-edge GenAI tools — currently working remotely from India.",
    creator: "Akil A",
    creatorId: "1243720976552144897",
    images: [
      "https://www.akillabs.tech/Coverimage.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/Darkmode Favicon.svg',
    shortcut: '/Darkmode Favicon.svg',
  },
  category: "technology",
};


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
