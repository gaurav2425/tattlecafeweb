"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";
import Script from "next/script"; // ✅ Import Script
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import SEO from "./components/SEO";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavAndFooterPaths = ["/join", "/register", "/blog"];
  const hideNavAndFooter = hideNavAndFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <head>
        <DefaultSeo {...SEO} />
      </head>
      <body style={{ backgroundColor: "#f6f4df", color: "#333" }}>
        {/* Google Analytics scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WTY116E7NT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WTY116E7NT');
          `}
        </Script>

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
