import React, { useEffect } from "react";
import styles from "../components/Container1.module.css";
import Image from "next/image";

function Container1() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container2}>
        <div className={styles.container2_left}>
          <h1 className={styles.heading}>
            We’re love <br /> scientists
          </h1>

          <h2 className={styles.description}>
            Clubs are virtual spaces within a chat application where users can
            gather to discuss a particular topic or interest. These clubs can be
            created by users or by the chat application itself, and they
            typically have a specific theme or focus. For example, a club might
            be dedicated to discussing a particular hobby, political issue, or
            entertainment genre. Users can join clubs that interest them and
            participate in conversations with other members. Rooms, on the other
            hand, are virtual spaces within a club or chat application where
            users can have real-time conversations with each other. Rooms can be
            created by users or by the chat application, and they can be public
            or private.
          </h2>
        </div>

        <div className={styles.hand_image}>
          <div>
            <Image
              src="/hand.png" // Use your image here
              alt="Background"
              width={350}
              height={100} // Adjust as needed
              style={{ height: "auto", maxWidth: "100%" }}
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Parallax Effect Without Library in Container4 */}
      <div
        className={styles.container4}
        style={{
          backgroundImage: "url('/pexels-tara-winsteadk-7666088.jpg')",
        }}
      >
        {/* <Image
          src="/pexels-tara-winstead-7666088.jpg" // Replace with the image you want
          alt="Parallax Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
      </div>

      <div className={styles.container5}>
        <div style={{ width: "600px", position: "relative" }}>
          <Image
            src="/group.png" // Use your image here
            alt="Group Image"
            width={600}
            height={100} // Adjust as needed
            style={{ height: "auto", maxWidth: "100%" }}
            quality={100}
          />
        </div>
        <div className={styles.container5right}>
          <h1 className={styles.heading}>We’re love scientists</h1>

          <p>
            Rooms, on the other hand, are virtual spaces within a club or chat
            application where users can have real-time conversations with each
            other. Rooms can be created by users or by the chat application, and
            they can be public or private. Public rooms are open to all members
            of the club or chat application, while private rooms are limited to
            a specific group of users. Users can join rooms that interest them
            and participate in text-based or voice-based conversations with
            other members
          </p>
          <p>
            Both clubs and rooms provide users with opportunities to connect
            with others who share their interests and engage in conversations in
            a structured and organized way. They can be a great way to build
            communities within a larger chat application, and they can help
            users to discover new topics, ideas, and perspectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container1;
