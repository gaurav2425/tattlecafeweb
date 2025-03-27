"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../components/AboutBar.module.css";

function AboutBar({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_sub_container}>
        <div className={styles.bar_heading_container}>
          <h1>{data?.question}</h1>
          <h1 onClick={() => setOpen(!open)}>{open ? "-" : "+"}</h1>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p style={{ marginLeft: "10px" }}>{data?.answer}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutBar;
