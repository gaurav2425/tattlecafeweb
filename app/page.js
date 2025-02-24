"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner";
import JoinWaitlist from "./pages/JoinWaitlist";
import Container1 from "./components/Container1";
import MobileScroll from "./components/MobileScroll";
import Footer from "./components/Footer";
import { NextSeo } from "next-seo";
// import { DefaultSeo } from "next-seo";
// import SEO from "../next-seo.config";
// import Head from "next/head";
export default function Home() {
  return (
    <div className={""}>
      <NextSeo
        title="Tattle - Find Your Match Over Coffee"
        description="Tattle is a café-based dating app with a unique 1:1 gender ratio system."
        canonical="https://tattle.app"
        openGraph={{
          url: "https://tattle.app",
          title: "Tattle - Café-Based Dating App",
          description: "Meet interesting people over coffee.",
          images: [
            {
              url: "https://tattle.app/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Tattle",
            },
          ],
          site_name: "Tattle",
        }}
        twitter={{
          handle: "@tattleapp",
          site: "@tattleapp",
          cardType: "summary_large_image",
        }}
      />
      {/* <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords.join(", ")} />
      </Head> */}

      {/* <DefaultSeo {...SEO} /> */}
      <HeroBanner></HeroBanner>

      <Container1></Container1>

      <div>
        <MobileScroll></MobileScroll>
      </div>
      <Footer></Footer>
    </div>
  );
}
