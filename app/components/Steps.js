import React from "react";
import StepCard from "./StepCard";
import styles from "./steps.module.css";

function Steps() {
  return (
    <div className={styles.steps_container}>
      <div>
        <h1 className={styles.steps_heading}>How does it WORK?</h1>
        <p className={styles.steps_description}>
          It’s dining, made effortless. We plan everything, just show up!
        </p>
      </div>
      <div className={styles.steps_inner_container}>
        <StepCard />
        <StepCard />
        <StepCard />
        <StepCard />
        <StepCard />
      </div>
      <div className={styles.blur_right}></div>
    </div>
  );
}

export default Steps;
