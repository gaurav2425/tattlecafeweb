import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins", // Define a CSS variable for global use
});

export const metadata = {
  title: "Dating Room - Find Your Match",
  description:
    "Join Dating Room to meet new people, chat, and find your perfect match in our virtual cafes.",
  keywords: "dating, relationships, matchmaking, chat rooms, virtual cafes",
  openGraph: {
    title: "Dating Room - Find Your Match",
    description:
      "Join Dating Room to meet new people, chat, and find your perfect match in our virtual cafes.",
    url: "https://www.tattlecafe.com",
    siteName: "TattleCafe",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1884608798482198528/G-9VRzY1_400x400.png", // Update with your actual OG image
        width: 1200,
        height: 630,
        alt: "Dating Room - Find Your Match",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating Room - Find Your Match",
    description:
      "Meet new people, chat, and enjoy virtual cafes at Dating Room.",
    images: [
      "https://pbs.twimg.com/profile_images/1884608798482198528/G-9VRzY1_400x400.png",
    ], // Update with actual Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
