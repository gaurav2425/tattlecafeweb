import Head from "next/head";
// import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import SEO from "./components/SEO";
import Footer from "./components/Footer";

// const poppins = Merriweather({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <DefaultSeo {...SEO} />
      </Head>
      <body
        // className={poppins.className}
        style={{ backgroundColor: "#f6f4df", color: "#333" }}
      >
        {/* <SEO /> */}
        {/* ✅ Works now since RootLayout is also a client component */}
        <main>
          <Navbar />
          {children}
          <Footer></Footer>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
