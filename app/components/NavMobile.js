import React from "react";
import { CloseIconSvg } from "./svg.js";
import styles from "./NavMobile.module.css";
function NavMobile() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_container_sub}>
        <div className={styles.nav_container_header}>
          <div className={styles.nav_container_header_left}>
            <CloseIconSvg></CloseIconSvg>
          </div>
          <div>
            <h1 className={styles.nav_container_header_name}>Tattle</h1>
          </div>

          <div className={styles.nav_container_download_button}>
            <h1 className={styles.nav_container_download_text}>Download</h1>
          </div>
        </div>

        <div className={styles.menu_container}>
          <div className={styles.menu_item_container}>
            <h1 className={styles.menu_item}>Mission</h1>
          </div>

          <div className={styles.menu_item_container}>
            <h1 className={styles.menu_item}>Lab</h1>
          </div>
          <div className={styles.menu_item_container}>
            <h1 className={styles.menu_item}>About</h1>
          </div>

          <div className={styles.menu_item_container}>
            <h1 className={styles.menu_item}>Social</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
