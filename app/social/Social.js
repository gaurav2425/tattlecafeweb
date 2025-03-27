import React from "react";

import styles from "./Social.module.css";
import {
  SocialInstaIcon,
  SocialLinkedinIcon,
  SocialXIcon,
} from "../components/svg";

function Social() {
  return (
    <div className={styles.social_container}>
      {/* <SEO></SEO> */}
      {/* <Navbar></Navbar> */}
      <div className={styles.social_icons}>
        <SocialLinkedinIcon></SocialLinkedinIcon>
        <SocialInstaIcon></SocialInstaIcon>
        <SocialXIcon></SocialXIcon>
      </div>
    </div>
  );
}

export default Social;
