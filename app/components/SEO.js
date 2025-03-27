"use client"; // Ensures this runs on the client-side

import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tattle - Speed Dating Platform",
    url: "https://tattle.com",
    description:
      "Tattle is a café-based speed dating platform where users are matched based on interests instead of swiping. Ensuring a balanced male-to-female ratio.",
    applicationCategory: "Dating",
    operatingSystem: "Web, iOS, Android",
    browserRequirements: "Requires JavaScript",
    author: {
      "@type": "Person",
      name: "Gaurav",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Free for Female Users",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tattle.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
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
      <Head>
        <meta
          name="keywords"
          content="speed dating app, audio matchmaking, virtual café dating, real-time dating platform, TattleCafe, matchmaking app, online dating"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    </>
  );
}
