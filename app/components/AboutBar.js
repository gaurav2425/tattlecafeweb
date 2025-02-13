import React, { useState } from "react";
import styles from "./AboutBar.module.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import GrainIcon from "@mui/icons-material/Grain";
function AboutBar({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_sub_container}>
        <div className={styles.bar_heading_container}>
          <h1>{data?.question}</h1>
          {open == false ? (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <AddIcon
                className={styles.add_icon}
                style={{ color: "#000" }}
              ></AddIcon>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <RemoveIcon
                className={styles.add_icon}
                style={{ color: "#000" }}
              ></RemoveIcon>
            </IconButton>
          )}
        </div>

        {open ? (
          <div>
            <p style={{ marginLeft: "10px" }}>{data?.answer} </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* <div>Plus</div> */}
    </div>
  );
}

export default AboutBar;
