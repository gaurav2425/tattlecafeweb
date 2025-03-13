"use client"; // Ensures this runs on the client-side

import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function SEO() {
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
      </Head>
    </>
  );
}
