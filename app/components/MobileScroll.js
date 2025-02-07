"use client";
import React, { useState, useEffect } from "react";
import "./mobileScroll.css";
import Text from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const scrollData = [
  {
    heading: "Skip Swipes, Start Conversation!",
    description:
      "Why waste weeks swiping when you can meet multiple potential matches in one evening? Our live speed dating events let you feel the chemistry instantly through real-time video interactions.",
    mobile_img: "/phone.png",
    // mobile_img: require("../../assets/home.png"),
  },
  {
    heading: "Join an Active Community",
    description:
      " Every member of TattleCafe is verified and actively participating. No more matching with abandoned profiles or inactive users – our community is alive and engaging",
    mobile_img: "/phone.png",
  },
  {
    heading: "Time-Limited Cafes",
    description:
      "Experience the thrill of exclusivity! Time-Limited Cafes are open for specific hours or days, creating a sense of urgency and excitement. Start your day with great conversations in the Morning Brews cafe, unwind after hours in the Night Owls' Den, or make the most of your weekend in the Weekend Wonders cafe. These fleeting moments make every interaction special—don’t miss your chance to connect!",
    mobile_img: "/hand.png",
  },
  // {
  //   heading: "for your eclectic taste.",
  //   description:
  //     "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
  //   mobile_img: "https://i.ibb.co/Sy415W2/i-Phone-13-Pro-Front-2.png",
  // },
  // {
  //   heading: "more cash in your pockets.",
  //   description:
  //     "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis ",
  //   mobile_img: "https://i.ibb.co/MC1DYkC/i-Phone-13-Pro-Front-3.png",
  // },

  // <a href="https://ibb.co/B2hZvvM"><img src="https://i.ibb.co/k2L8zzC/i-Phone-13-Pro-3.png" alt="i-Phone-13-Pro-3" border="0"></a>
];

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/56cXXmX/Woman-hand-holding-i-Phone-12-mockup-Black-skin-Mockuuups-Studio.png" alt="Woman-hand-holding-i-Phone-12-mockup-Black-skin-Mockuuups-Studio" border="0"></a> */
}

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  console.log(currentImg);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen" key={i}>
            <Text screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <Image
              src={scrollData[currentImg].mobile_img} // Dynamically load the image
              alt="Mobile Mockup"
              width={300} // Adjust width
              height={620} // Adjust height
              objectFit="cover" // Maintain aspect ratio
              priority // Ensures fast loading
              key={scrollData[currentImg].mobile_img}

              // Forces re-render on change
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
