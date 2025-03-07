import { useEffect, useState } from "react";
import styles from "./HeroBanner.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    // Open the curtain after a short delay
    setTimeout(() => setCurtainOpen(true), 500);
  }, []);

  return (
    <Parallax speed={-40}>
      <div className={styles.container}>
        {/* Curtain Animation */}
        {!curtainOpen && (
          <div className={styles.curtain}>
            <div className={styles.curtainTop}></div>
            <div className={styles.curtainBottom}></div>
          </div>
        )}

        {/* Background Image */}
        <div className={styles.bg_img}>
          <Image
            src={
              isMobile
                ? "/pexels-urfriendlyphotog1-29641629.jpg"
                : "/pexels-urfriendlyphotog-29641629.jpg"
            }
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className={styles.container1}>
          <div className={styles.left_container1_content}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1
                style={{
                  fontFamily: "Poppins, sans-serif",
                  position: "relative",
                  lineHeight: "1.1",
                }}
                className={styles.banner_heading}
              >
                The{" "}
                <span
                  style={{ WebkitTextStroke: "3px #fff", color: "transparent" }}
                >
                  Cafe
                </span>{" "}
                &{" "}
                <span
                  style={{ WebkitTextStroke: "3px #fff", color: "transparent" }}
                >
                  Audio
                </span>
                <br />
                Based Dating
              </h1>
              <div
                style={{
                  width: 500,
                  color: "#000",
                  // marginTop: 20,
                }}
                className={styles.banner_content}
              >
                <p
                  className={styles.description}
                  style={{
                    color: "#fff",
                    borderRadius: 10,
                    fontFamily: "poppins",
                  }}
                >
                  Tattle is built on the belief that real connections start with
                  real conversations. That’s why we’ve created a cafe-style,
                  audio-first dating experience—where voices spark chemistry,
                  and meaningful matches are made in minutes.
                </p>
              </div>
              <div
                className={styles.get_started_btn}
                style={{
                  background: "#fff",
                  marginTop: 25,
                  paddingRight: 5,
                  paddingLeft: 15,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 100,
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    color: "#000",
                    fontWeight: "600",
                    fontFamily: "poppins",
                  }}
                >
                  Book your seat
                </p>
                <div
                  style={{
                    padding: 15,
                    background: "#61204E",
                    borderRadius: 100,
                    marginLeft: 15,
                  }}
                >
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.740001 16 8.34465e-07M24 7L1.43051e-06 7"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "absolute",
                  bottom: 10,
                }}
              >
                <Image
                  className={styles.girls_images}
                  src="/girlsprofile.png"
                  width={586 / 2}
                  height={200 / 2}
                  alt="Picture of the author"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default HeroBanner;
