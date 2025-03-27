"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner";
import JoinWaitlist from "./pages/JoinWaitlist";
import Container1 from "./components/Container1";
import MobileScroll from "./components/MobileScroll";
import Footer from "./components/Footer";
// import { DefaultSeo } from "next-seo";
// import SEO from "../next-seo.config";
// import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import Steps from "./components/Steps";
import { NextSeo } from "next-seo";
import Head from "next/head";
export default function Home() {
  return (
    <ParallaxProvider>
      <Head>
        <NextSeo
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
      </Head>

      <div className={""}>
        {/* <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords.join(", ")} />
      </Head> */}

        {/* <DefaultSeo {...SEO} /> */}
        <HeroBanner></HeroBanner>

        <Container1></Container1>
        <Steps></Steps>
        <div>
          <MobileScroll />
        </div>
        <Footer></Footer>
      </div>
    </ParallaxProvider>
  );
}
