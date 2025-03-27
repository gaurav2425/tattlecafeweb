"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import SEO from "./components/SEO";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavAndFooterPaths = ["/join", "/register"];
  const hideNavAndFooter = hideNavAndFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <Head>
        <DefaultSeo {...SEO} />
      </Head>
      <body style={{ backgroundColor: "#f6f4df", color: "#333" }}>
        <main>
          {!hideNavAndFooter && <Navbar />}
          {children}
          {!hideNavAndFooter && <Footer />}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
