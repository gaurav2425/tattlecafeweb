import styles from "./HeroBanner.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function HeroBanner() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 2000,
  //     });
  //   }, []);
  return (
    <div className={styles.container}>
      <div className={styles.bg_img}>
        <Image
          src="/pexels-urfriendlyphotog-29641629.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* <div className={styles.bar}>
        <h1>
          Discover cafes filled with fascinating and unexpected conversations
        </h1>
      </div> */}

      <div className={styles.container1}>
        <div className={styles.left_container1_content}>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              position: "relative",
              lineHeight: "1.1",
            }}
          >
            The{" "}
            <span
              style={{
                WebkitTextStroke: "3px #fff", // Stroke effect
                color: "transparent", // Remove fill
              }}
            >
              Cafe
            </span>{" "}
            &{" "}
            <span
              style={{
                WebkitTextStroke: "3px #fff", // Stroke effect
                color: "transparent", // Remove fill
              }}
            >
              Audio
            </span>
            <br />
            Based Dating
          </h1>

          {/* <h1>Based Dating</h1> */}
          <div
            style={{
              width: 500,
              color: "#000",
            }}
          >
            <p
              style={{
                color: "#fff",
                // padding: 10,
                borderRadius: 10,
                // fontWeight: "500",
                fontFamily: "poppins",
              }}
              // className={styles.desc_banner}
            >
              Tattle is built on the belief that real connections start with
              real conversations. That’s why we’ve created a cafe-style,
              audio-first dating experience—where voices spark chemistry, and
              meaningful matches are made in minutes. No endless swiping, just
              genuine interactions that bring you closer to someone special.
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
                // background: "red",
                fontWeight: "600",
                fontFamily: "poppins",
              }}
            >
              Get Started
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
                  // stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              marginTop: "5%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/girlsprofile.png"
              width={586 / 2}
              height={200 / 2}
              alt="Picture of the author"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
