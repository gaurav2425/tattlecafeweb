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
    heading: "Invite Only Dating Real Matches, No Swiping",
    description:
      "Tattle is a private, invite-only dating app designed for those seeking genuine connections. By keeping it exclusive, we ensure high-quality matches, eliminate fake and inactive profiles, and maintain a balanced male-to-female ratio. Unlike traditional dating apps, our intelligent algorithm pairs you based on true compatibility—no endless swiping, no biased systems. Join a virtual café, meet like-minded people, and enjoy authentic six-minute conversations. Secure your invite and experience dating the right way!",
    mobile_img: "/inviteonlyphone.png",
  },
  {
    heading: "Find Your Perfect Match Over Coffee",
    description:
      "Tattle brings a fresh twist to dating with café-based matchmaking! Join a real-time dating room where our smart algorithm pairs you with compatible matches while maintaining a balanced male-to-female ratio. No endless swiping—just meaningful six-minute conversations that spark real connections. Speed dating happens daily from 7 PM to 9 PM. Say goodbye to biased algorithms and inactive profiles. Find love over coffee, effortlessly. Try Tattle today!",
    mobile_img: "/phone.png",
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
              quality={50}
              width={300} // Adjust width
              height={620} // Adjust height
              objectFit="cover" // Maintain aspect ratio
              priority={currentImg === 0}
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
