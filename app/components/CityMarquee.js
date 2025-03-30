import Marquee from "react-fast-marquee";
import styles from "./styles/CityMarquee.module.css";

const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const usCities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

const CityMarquee = () => {
  return (
    <div className={styles.testimonialContainer}>
      <h2 className={styles.title}>Find Your Match in Top Cities</h2>

      {/* India Cities Marquee (Right to Left) */}
      <Marquee
        pauseOnHover
        speed={50}
        direction="right"
        className={styles.marquee_strip}
      >
        {indianCities.map((city, index) => (
          <div key={index} className={styles.cityCard}>
            <p className={styles.cityName}>{city}</p>
          </div>
        ))}
      </Marquee>

      {/* USA Cities Marquee (Left to Right) */}
      <Marquee
        pauseOnHover
        speed={50}
        direction="left"
        className={styles.marquee_strip}
      >
        {usCities.map((city, index) => (
          <div key={index} className={styles.cityCard}>
            <p className={styles.cityName}>{city}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CityMarquee;
