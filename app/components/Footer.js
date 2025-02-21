"use client";
import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import Triangle from "./Triangle";

function Footer() {
  const [triangleCount, setTriangleCount] = useState(0);

  useEffect(() => {
    // Function to update triangle count dynamically based on screen width
    const updateTriangleCount = () => {
      const screenWidth = window.innerWidth;
      const triangleWidth = 36; // Width of each triangle in pixels
      setTriangleCount(Math.ceil(screenWidth / triangleWidth));
    };

    // Initial count calculation
    updateTriangleCount();

    // Update count on window resize
    window.addEventListener("resize", updateTriangleCount);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateTriangleCount);
  }, []);

  return (
    <div className={styles.footer_container_main}>
      {/* Triangle Section (Dynamically Filled) */}
      <div
        style={{
          background: "#61204e",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: triangleCount }).map((_, index) => (
          <Triangle key={index} />
        ))}
      </div>

      {/* Footer Content */}
      <div className={styles.footer_container}>
        <div className={styles.footer_container_left}>
          <Image
            src="/logo2.png"
            width={250}
            height={250}
            alt="Picture of the author"
          />
          <h1>Tattle</h1>
        </div>

        <div className={styles.footer_container_right}>
          <h5 className={styles.footer_right_title}>
            Cafe & Audio Based Dating
          </h5>
          <p>
            If you're looking for a motivated and skilled individual to
            collaborate on your next project or if you have an exciting
            opportunity where my expertise could be valuable, I'd love to
            discuss further! Let's join forces to create something exceptional.
            Feel free to reach out, and let's explore collaboration
            possibilities together.
          </p>
          {/* <h1 className={styles.connect_social}>Connect Social</h1> */}

          {/* <div className={styles.social_icons}>
            <AlternateEmailIcon
              fontSize="large"
              className={styles.email_icon}
              style={{
                marginRight: 5,
              }}
            />
            <TwitterIcon
              fontSize="large"
              className={styles.twitter_icon}
              style={{
                marginRight: 5,
              }}
            />
            <LinkedInIcon
              fontSize="large"
              className={styles.linkedin_icon}
              style={{
                marginRight: 5,
              }}
            />
            <InstagramIcon
              fontSize="large"
              className={styles.instagram_icon}
              style={{
                marginRight: 5,
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
