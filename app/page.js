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
export default function Home() {
  return (
    <ParallaxProvider>
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
          <MobileScroll></MobileScroll>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </ParallaxProvider>
  );
}
