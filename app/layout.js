import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WhatCJSees",
  description: "Photographs by CJ Thomas — Built from scratch with Next.js",
  icons: {
    icon: "/small-logo.ico",
  },
  openGraph: {
    title: "WhatCJSees",
    description:
      "Built from scratch. Shot with intention. Explore the work of CJ Thomas.",
    url: "https://whatcjsees.vercel.app",
    siteName: "WhatCJSees",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "WhatCJSees — CJ Thomas Photography",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatCJSees",
    description:
      "Built from scratch. Shot with intention. Explore the work of CJ Thomas.",
    images: ["/og-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
