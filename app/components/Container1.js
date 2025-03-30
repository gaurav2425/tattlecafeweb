import React, { useEffect } from "react";
import styles from "../components/Container1.module.css";
import Image from "next/image";

function Container1() {
  return (
    <div className={styles.main_container}>
      <div className={styles.container2}>
        <div className={styles.container2_left}>
          <h1 className={styles.heading}>
            Ditch the Swipes & Embrace<br></br> Real Conversations
          </h1>

          <h2 className={styles.description}>
            Tattle Cafe revolutionizes online dating by maintaining a 50:50
            male-to-female ratio, ensuring equal matchmaking opportunities for
            everyone. Unlike traditional dating apps that rely on unfair
            algorithms and endless swiping, we focus on real-time speed dating
            and authentic interactions with only verified and active profiles.
            Our system eliminates fake accounts, enhances engagement, and
            fosters genuine connections through live, 6-minute conversations. No
            more ghosting, low engagement, or one-sided matches—just a fair,
            exciting, and smart way to find meaningful relationships.
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
      ></div>

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
        </div>
      </div>
    </div>
  );
}

export default Container1;
