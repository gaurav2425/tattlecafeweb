"use client";
import React from "react";
import styles from "./About.module.css";
import AboutBar from "../components/AboutBar";
import Image from "next/image";
import Head from "next/head";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import AboutBar from "../../Components/AboutBar";
// import SEO from "../../Seo/SEO";
function About() {
  const title = "About Us - Tattle";
  const description =
    "Learn more about Tattle, the speed dating platform with a unique matchmaking approach.";
  const keywords =
    "dating, speed dating, relationships, matchmaking, Tattle, online dating";
  const data = [
    {
      question: "What makes Tattle different from other dating apps?",
      answer:
        "Tattle is an audio-first speed dating app that prioritizes real conversations over endless swiping. With a strict 1:1 male-to-female ratio and real-time matchmaking, we create an authentic and fair dating experience.",
    },
    {
      question: "How does the speed dating feature work?",
      answer:
        "Every evening from 7 PM to 9 PM, users enter a virtual matchmaking room where they are paired with someone based on compatibility. Each match lasts 6 minutes before switching to a new partner.",
    },
    {
      question:
        "What is the 1:1 male-to-female ratio, and how is it maintained?",
      answer:
        "To ensure fairness, we regulate the number of male and female participants in speed dating sessions. If the ratio becomes unbalanced, new users are placed in a queue until balance is restored.",
    },
    {
      question: "What are themed cafés, and how do they work?",
      answer:
        "Themed cafés are virtual spaces where users with shared interests can meet. Whether you love books, music, or adventure, our cafés help you find matches in an engaging setting.",
    },
    {
      question: "How do I join a themed café?",
      answer:
        "You can enter a themed café by selecting one that aligns with your interests. Some cafés require tickets, which can be earned by being an active user or purchased within the app.",
    },
    {
      question: "What happens during a speed dating session?",
      answer:
        "Once matched, you have 6 minutes to chat via audio before moving to the next match. This encourages meaningful conversations and helps you quickly find someone compatible.",
    },
    {
      question: "How does Tattle prevent inactive or fake profiles?",
      answer:
        "We regularly verify profiles and remove inactive users to keep the dating pool fresh. Our system also flags suspicious activity to ensure a safe and authentic dating experience.",
    },
    {
      question: "Is Tattle free to use?",
      answer:
        "Tattle offers free speed dating sessions, but premium features like themed café access and priority matchmaking can be unlocked through subscriptions or in-app purchases.",
    },
    {
      question: "How does Tattle’s matchmaking algorithm work?",
      answer:
        "Our algorithm considers shared interests, past interactions, and real-time availability to create the best possible matches. We ensure fair exposure so that everyone has a chance to connect.",
    },
    {
      question: "How do I get started with Tattle?",
      answer:
        "Simply sign up, complete your profile, and join a speed dating session or themed café. The app will guide you through the matchmaking process, helping you find exciting new connections.",
    },
  ];

  return (
    <div className={styles.about_container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tattle.com/about" />
        <meta property="og:image" content="https://tattle.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      {/* <Navbar></Navbar>
      <SEO></SEO> */}
      <div className={styles.container1}>
        <div className={styles.container1_left}>
          {/* <img src={require("../../assets/about_img.png")}></img> */}
          <Image
            src={"/goddess.png"}
            alt="Background"
            // layout="fill"
            objectFit="cover"
            quality={50}
            width={300}
            height={220}
          />
        </div>

        <div className={styles.container1_right}>
          <h1>A New Era of Dating – Beyond the Swipe Culture</h1>
          <p>
            Tattle is more than just a dating app—it’s a movement designed to
            bring real connections back into modern dating. We believe that
            genuine attraction isn’t based on profile pictures alone but on
            authentic conversations, shared interests, and true compatibility.
            While most dating platforms focus on endless swipes, texts that lead
            nowhere, and algorithms that favor a small percentage of users,
            Tattle disrupts the norm by offering an audio-first, speed dating
            experience. Here, conversations take center stage, ensuring every
            match is engaging, interactive, and meaningful.
          </p>
        </div>
      </div>
      <div className={styles.bar_container}>
        {data?.map((data, index) => {
          return <AboutBar data={data} key={index}></AboutBar>;
        })}
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default About;
