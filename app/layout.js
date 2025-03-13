"use client";
import { DefaultSeo } from "next-seo";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f6f4df" />
      </head>
      <body
        className={poppins.variable}
        style={{ backgroundColor: "#f6f4df", color: "#333" }}
      >
        <DefaultSeo
          title="TattleCafe | Best Audio Speed Dating & Matchmaking App"
          description="TattleCafe is the ultimate audio-based speed dating app where real-time matchmaking happens in virtual café rooms. Get matched, chat for 6 minutes, and find your perfect connection."
          openGraph={{
            type: "website",
            url: "https://www.tattlecafe.com",
            title: "TattleCafe | Best Audio Speed Dating & Matchmaking App",
            description:
              "Experience the best real-time audio speed dating platform. Get matched instantly in virtual cafés, chat for 6 minutes, and meet new people.",
            images: [
              {
                url: "https://www.tattlecafe.com/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TattleCafe - Best Speed Dating App",
              },
            ],
            siteName: "TattleCafe",
          }}
          twitter={{
            handle: "@TattleCafe",
            site: "@TattleCafe",
            cardType: "summary_large_image",
          }}
        />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
