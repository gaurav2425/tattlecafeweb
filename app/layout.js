import { Poppins, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "TattleCafe | Best Audio Speed Dating & Matchmaking App",
  description:
    "TattleCafe is the ultimate audio-based speed dating app where real-time matchmaking happens in virtual café rooms. Get matched, chat for 6 minutes, and find your perfect connection.",
  keywords:
    "speed dating, dating app, real-time matchmaking, audio dating, virtual café rooms, chat rooms, find a match, online dating, relationship app",
  openGraph: {
    title: "TattleCafe | Best Audio Speed Dating & Matchmaking App",
    description:
      "Experience the best real-time audio speed dating platform. Get matched instantly in virtual cafés, chat for 6 minutes, and meet new people.",
    url: "https://www.tattlecafe.com",
    siteName: "TattleCafe",
    images: [
      {
        url: "https://www.tattlecafe.com/images/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "TattleCafe - Best Speed Dating App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TattleCafe | Best Audio Speed Dating App",
    description:
      "Join TattleCafe to meet new people, chat, and find your perfect match in real-time virtual café rooms.",
    images: [
      "https://www.tattlecafe.com/images/twitter-image.jpg", // Replace with actual Twitter image
    ],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
