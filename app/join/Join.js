import styles from "./Join.module.css";

const Join = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          FIND YOUR <br />
          CAMPUS CREW <br />
          OVER LUNCH
        </h1>
        <p className={styles.subtitle}>Every friend starts as a stranger.</p>
        <button className={styles.button}>Join the Waiting list</button>
        <p className={styles.signIn}>I already have an account</p>
        <p className={styles.terms}>
          By signing up, you agree to the <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Join;
