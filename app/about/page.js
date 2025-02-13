import React from "react";
import styles from "../About/About.module.css";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
import AboutBar from "../components/AboutBar";
import SEO from "../../Seo/SEO";
function About() {
  const data = [
    {
      question: "What makes this app different from other dating apps?",
      answer:
        "Our app prioritizes balance and meaningful connections. With a strict 1:1 ratio of men to women, and unique ticketed virtual cafes, we ensure a fair and engaging dating experience unlike any other.",
    },
    {
      question: "How does the equal men-to-women ratio work?",
      answer:
        "We monitor the user base to maintain an even ratio of men and women. This ensures a fair chance for everyone to find a match and fosters a balanced, inclusive dating environment.",
    },
    {
      question: "What are the virtual cafes, and how do they work?",
      answer:
        "Virtual cafes are themed online spaces where users can join for conversations and connections. You need a ticket to enter, which helps maintain exclusivity and creates a relaxed, engaging atmosphere.",
    },
    {
      question: "How do I get tickets for the cafes?",
      answer:
        "Tickets can be earned through app engagement, such as completing your profile, participating in challenges, or purchasing them directly through the app.",
    },
    {
      question: "What happens in the cafes?",
      answer:
        "Once inside a cafe, you can meet and chat with other users who share similar interests. Each cafe has its own vibe, making it easier to find someone who matches your energy.",
    },
  ];
  return (
    <div className={styles.about_container}>
      {/* <Navbar></Navbar> */}
      {/* <SEO></SEO> */}
      <div className={styles.container1}>
        <div className={styles.container1_left}>
          <img src={require("../../assets/about_img.png")}></img>
        </div>

        <div className={styles.container1_right}>
          <h1>Find your tribe, and love them hard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            iaculis iaculis libero et pretium. Etiam viverra a tellus sed
            iaculis. Vivamus nisi orci, pulvinar eget bibendum vitae.Everyone
            has their own way of learning and expressing creativity. Apple
            technology and resources empower every kind of educator — and every
            kind of student — to learn, create and define their own success.
            Let’s move the world forward.
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
