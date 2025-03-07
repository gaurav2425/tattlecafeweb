import React from "react";
import styles from "./StepCard.module.css";
import Image from "next/image";
function StepCard({ steps }) {
  return (
    <div className={styles.main_steps_container}>
      <div className={styles.inner_container}>
        <div className={styles.steps_top_container}>
          <Image
            className={styles.image_steps}
            src={steps?.path}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            // width={300}
            // height={250}
          ></Image>
        </div>
        <div className={styles.bottom_container}>
          <h1 className={styles.bottom_container_heading}>{steps?.title}</h1>
          <p className={styles.bottom_container_description}>
            {steps?.description}
          </p>
          <div className={styles.step_count_container}>
            <h1 className={styles.bottom_container_heading}>
              {steps?.stepCount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepCard;
