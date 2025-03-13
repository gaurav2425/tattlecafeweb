"use client"; // 🚨 Add this to make it a client component

import Head from "next/head";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f6f4df" />
      </Head>
      <body
        className={poppins.className}
        style={{ backgroundColor: "#f6f4df", color: "#333" }}
      >
        {/* <SEO /> */}
        {/* ✅ Works now since RootLayout is also a client component */}
        <main>
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
