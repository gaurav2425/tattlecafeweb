"use client"; // Required for client-side effects in Next.js App Router

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js optimized image
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import MenuIcon from "@mui/icons-material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setBgColor(window.scrollY >= 100 ? "red" : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTabs = [
    { key: "Home", route: "/" },
    { key: "Mission", route: "/about" },
    { key: "Social", route: "/social" },
  ];

  return (
    <div
      className={bgColor ? styles.navbar_animated : styles.navbar}
      data-aos="fade-down"
      // style={{ backgroundColor: bgColor || "#fff" }}
    >
      <div className={styles.navbar_right}>
        <div className={styles.navbar_left}>
          <Image
            src="/logo2.png"
            width={100 / 2}
            height={100 / 2}
            alt="Picture of the author"
          ></Image>
          <Link href="/" className={styles.link}>
            <h1 style={{ color: bgColor ? "#000" : "#fff" }}>Tattle</h1>
          </Link>
        </div>

        <ul className={styles.links_home}>
          {navTabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.route}
              className={styles.link}
              onClick={() => setActiveLink(tab.key)}
            >
              <li style={{ color: bgColor ? "#000" : "#fff" }}>{tab.key}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles.navbar_right_icon_container}>
        <DragHandleIcon className={styles.navbar_menu_icon} fontSize="large" />
      </div>
    </div>
  );
}
