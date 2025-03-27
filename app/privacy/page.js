import React from "react";
import styles from "./privacy.module.css";
function page() {
  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Privacy Policy</h2>
        <p className={styles.text}>Effective Date: [Insert Date]</p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>1. Introduction</h3>
        <p className={styles.text}>
          Welcome to <strong>Tattle</strong>! Your privacy is important to us.
          This Privacy Policy explains how we collect, use, disclose, and
          protect your personal information when you use our app and services.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>2. Information We Collect</h3>
        <ul className={styles.list}>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, gender, date of birth, and profile details.
          </li>
          <li>
            <strong>Location Data:</strong> To match you with nearby users.
          </li>
          <li>
            <strong>Usage Data:</strong> Interactions with the app, preferences,
            and device information.
          </li>
          <li>
            <strong>Communications:</strong> Messages and interactions within
            the app.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>3. How We Use Your Information</h3>
        <ul className={styles.list}>
          <li>Provide and improve our services.</li>
          <li>Match users based on interests and preferences.</li>
          <li>Ensure a fair male-to-female ratio.</li>
          <li>Prevent fraud and enhance security.</li>
          <li>Send notifications and updates.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>4. Sharing of Information</h3>
        <p className={styles.text}>
          Your data is never sold. However, we may share information with:
        </p>
        <ul className={styles.list}>
          <li>Service providers assisting in app operations.</li>
          <li>Law enforcement if required by law.</li>
          <li>Other users based on your privacy settings.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>5. Security Measures</h3>
        <p className={styles.text}>
          We implement encryption, access control, and secure servers to protect
          your data. However, no online platform is 100% secure.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>6. Your Rights</h3>
        <ul className={styles.list}>
          <li>Access, update, or delete your information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Deactivate your account at any time.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>7. Changes to This Policy</h3>
        <p className={styles.text}>
          We may update this policy. Continued use of Tattle after changes means
          you accept the revised policy.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>8. Contact Us</h3>
        <p className={styles.text}>
          For any questions, contact us at [Insert Contact Email].
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Terms of Service</h2>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>1. Acceptance of Terms</h3>
        <p className={styles.text}>
          By using <strong>Tattle</strong>, you agree to these Terms of Service.
          If you disagree, do not use our app.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>2. Eligibility</h3>
        <p className={styles.text}>
          You must be at least 18 years old to use Tattle.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>3. User Conduct</h3>
        <ul className={styles.list}>
          <li>Provide accurate information.</li>
          <li>Respect other users.</li>
          <li>Not engage in harassment, scams, or illegal activities.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>4. Account Suspension</h3>
        <p className={styles.text}>
          We reserve the right to suspend or terminate accounts that violate our
          policies.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>5. Liability Disclaimer</h3>
        <p className={styles.text}>
          Tattle is not responsible for any damages, personal or financial,
          arising from interactions between users.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>6. Governing Law</h3>
        <p className={styles.text}>
          These terms are governed by the laws of [Insert Jurisdiction].
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>7. Contact Us</h3>
        <p className={styles.text}>
          For any inquiries, reach out to [Insert Contact Email].
        </p>
      </section>
    </div>
  );
}

export default page;
