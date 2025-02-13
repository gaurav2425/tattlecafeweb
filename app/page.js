"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner";
import JoinWaitlist from "./pages/JoinWaitlist";
import Container1 from "./components/Container1";
import MobileScroll from "./components/MobileScroll";
import Footer from "./components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
export default function Home() {
  return (
    <div className={""}>
      <DefaultSeo {...SEO} />
      <HeroBanner></HeroBanner>
      {/* <JoinWaitlist /> */}
      <Container1></Container1>

      <div>
        <MobileScroll></MobileScroll>
      </div>
      <Footer></Footer>
    </div>
  );
}
