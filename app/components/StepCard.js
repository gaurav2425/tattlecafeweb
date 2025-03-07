import React from "react";
import styles from "./StepCard.module.css";
import Image from "next/image";
function StepCard() {
  return (
    <div className={styles.main_steps_container}>
      <div className={styles.inner_container}>
        <div className={styles.steps_top_container}>
          <Image
            className={styles.image_steps}
            src={"/pexels-tara-winstead-7666088.jpg"}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            // width={300}
            // height={250}
          ></Image>
        </div>
        <div className={styles.bottom_container}>
          <h1 className={styles.bottom_container_heading}>
            Take a quick personality
          </h1>
          <p className={styles.bottom_container_description}>
            We handpick restaurants using carefully tailored criteria to
            guarantee
          </p>
          <div className={styles.step_count_container}>
            <h1 className={styles.bottom_container_heading}>1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepCard;
