import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Prevents render-blocking
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f6f4df" />
        {/* JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TattleCafe",
              url: "https://www.tattlecafe.com",
              logo: "https://www.tattlecafe.com/images/logo.png",
              sameAs: [
                "https://twitter.com/TattleCafe",
                "https://www.instagram.com/TattleCafe",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={poppins.variable}
        style={{ backgroundColor: "#f6f4df", color: "#333" }}
      >
        {/* SEO Metadata */}
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

        {/* Main Content */}
        <main>
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
