import React from "react";
import StepCard from "./StepCard";
import styles from "./steps.module.css";

function Steps() {
  let stepsContent = [
    {
      title: "Take a Quick Personality Test",
      description:
        "Start by answering a few simple questions about your interests and preferences. Our smart algorithm will analyze your responses to match you with like-minded individuals",
      path: "/pexels-tara-winstead-7666088.jpg",
      stepCount: 1,
    },
    {
      title: "Select Your Ideal Café",
      description:
        "Browse through various themed cafes and pick the one that best suits your vibe. Whether you prefer deep conversations, casual fun, or adventurous meetups, there's a café for you!",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 2,
    },
    {
      title: "Join the Live Speed Dating Session",
      description:
        "Every evening from 7 PM to 9 PM, engage in an exciting speed dating experience. Break the ice effortlessly, meet new people, and enjoy meaningful interactions—no awkward silences, no pressure!",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 3,
    },
    {
      title: "Get Matched & Start Talking",
      description:
        "Once inside the café, our system will pair you with someone in real-time.You'll have 6 minutes to chat, get to know each other, and see if there's a connection—genuine, spontaneous, and fun!",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 4,
    },
    {
      title: "Like, Connect & Keep the Conversation Going",
      description:
        "At the end of your session, decide who you’d like to stay in touch with. If both of you are interested, you can start chatting immediately and plan your next date.",
      path: "/pexels-urfriendlyphotog-29641629.jpg",
      stepCount: 5,
    },
  ];

  return (
    <div className={styles.steps_container}>
      <div>
        <h1 className={styles.steps_heading}>How Tattle Cafe Works</h1>
        <p className={styles.steps_description}>
          Forget endless swiping and fake profiles—Tattle Cafe brings real
          people together through live speed dating. Our unique café-based
          matchmaking ensures a balanced and engaging experience, where every
          connection counts.
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
