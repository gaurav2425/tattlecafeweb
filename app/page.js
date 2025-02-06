import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroBanner></HeroBanner>
    </div>
  );
}
