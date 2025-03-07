import React from "react";
import StepCard from "./StepCard";
import styles from "./steps.module.css";

function Steps() {
  let stepsContent = [
    {
      title: "Take a quick personality",
      description:
        "We handpick restaurants using carefully tailored criteria to guarantee an experience that fits your preferences.",
      path: "/pexels-tara-winstead-7666088.jpg",
      stepCount: 1,
    },
    {
      title: "Browse personalized",
      description:
        "Explore a curated list of venues based on your personality and interests, ensuring the perfect match for your date.",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 2,
    },
    {
      title: "Select a time and date",
      description:
        "Choose the best time that works for both of you, and lock in your reservation with ease.",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 3,
    },
    {
      title: "Arrive and enjoy the date",
      description:
        "Once you arrive at the venue, relax and enjoy your date in a comfortable, carefully selected setting.",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 4,
    },
    {
      title: "Provide feedback",
      description:
        "After the date, share your experience so we can keep refining our recommendations and improve future matches.",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 5,
    },
  ];

  return (
    <div className={styles.steps_container}>
      <div>
        <h1 className={styles.steps_heading}>How does it WORK?</h1>
        <p className={styles.steps_description}>
          It’s dining, made effortless. We plan everything, just show up!
        </p>
      </div>
      <div className={styles.steps_inner_container}>
        {stepsContent?.map((steps, index) => {
          return (
            <div key={index}>
              <StepCard steps={steps} />
            </div>
          );
        })}
      </div>
      <div className={styles.blur_right}></div>
    </div>
  );
}

export default Steps;
