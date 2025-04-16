import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>ArtSpace</div>
        <nav className={styles.nav}>
          <a href="#">Discover</a>
          <a href="#">Exhibits</a>
          <a href="#">Artists</a>
          <a href="#">Contribute</a>
        </nav>
        <div className={styles.userIcons}>
          <span>💰 64700</span>
          <span>👤</span>
        </div>
      </header>
      <main className={styles.main}>
        <h1>
          Welcome to <span className={styles.highlight}>ArtSpace</span>:<br />
          Your Online Digital Art Gallery
        </h1>
        <p>
          Unleash your creativity and create masterpieces with AI at ArtSpace.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Create Artwork</button>
          <button className={styles.secondaryButton}>Discover Gallery</button>
        </div>
        <div className={styles.artworkGrid}>
          <div className={styles.artCard}>
            <p>Glow Pulse</p>
          </div>
          <div className={styles.artCard}>
            <p>Night Veil</p>
          </div>
          <div className={styles.artCard}>
            <p>Sun Chase</p>
          </div>
          <div className={styles.artCard}>
            <p>Wild</p>
          </div>
          <div className={styles.artCard}>
            <p>Solar Fest</p>
          </div>
        </div>
      </main>
    </div>
  );
}
