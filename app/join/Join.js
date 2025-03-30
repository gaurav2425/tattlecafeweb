"use client";
import { useState } from "react";
import styles from "./Join.module.css";

// Translation dictionary
const translations = {
  English: {
    welcome: "Welcome to Buildpad's Affiliate Program",
    earn: "Earn 40% on all paid customers, for life.",
    login: "Log in or Sign up",
    enterEmail:
      "Enter your email below and we'll send you a verification code.",
    placeholder: "name@company.com",
    continue: "Continue",
    poweredBy: "Powered by Tattle & CO",
  },
  العربية: {
    welcome: "مرحبًا بكم في برنامج Buildpad للتسويق بالعمولة",
    earn: "اكسب 40٪ على جميع العملاء المدفوعين، مدى الحياة.",
    login: "تسجيل الدخول أو الاشتراك",
    enterEmail: "أدخل بريدك الإلكتروني وسنرسل لك رمز التحقق.",
    placeholder: "name@company.com",
    continue: "متابعة",
    poweredBy: "مدعوم من Tattle & CO",
  },
  Deutsch: {
    welcome: "Willkommen im Buildpad-Partnerprogramm",
    earn: "Verdiene 40% an allen zahlenden Kunden, lebenslang.",
    login: "Einloggen oder Registrieren",
    enterEmail:
      "Geben Sie unten Ihre E-Mail-Adresse ein, wir senden Ihnen einen Bestätigungscode.",
    placeholder: "name@company.com",
    continue: "Weiter",
    poweredBy: "Bereitgestellt von Tattle & CO",
  },
  Español: {
    welcome: "Bienvenido al Programa de Afiliados de Buildpad",
    earn: "Gana un 40% en todos los clientes de pago, de por vida.",
    login: "Iniciar sesión o Registrarse",
    enterEmail:
      "Ingrese su correo electrónico y le enviaremos un código de verificación.",
    placeholder: "name@company.com",
    continue: "Continuar",
    poweredBy: "Desarrollado por Tattle & CO",
  },
  Français: {
    welcome: "Bienvenue dans le programme d'affiliation Buildpad",
    earn: "Gagnez 40% sur tous les clients payants, à vie.",
    login: "Se connecter ou S'inscrire",
    enterEmail:
      "Entrez votre e-mail ci-dessous et nous vous enverrons un code de vérification.",
    placeholder: "name@company.com",
    continue: "Continuer",
    poweredBy: "Propulsé par Tattle & CO",
  },
};

const Join = () => {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = Object.keys(translations);
  const t = translations[language]; // Get translation for selected language

  return (
    <div className={styles.container}>
      {/* Language Selector */}
      <div
        className={styles.languageSelector}
        onClick={() => setIsOpen(!isOpen)}
      >
        🌍 {language} ▼
        {isOpen && (
          <ul className={styles.dropdown}>
            {languages.map((lang) => (
              <li
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.logo}>Buildpad</div>
        <h2 className={styles.title}>{t.welcome}</h2>
        <p className={styles.subtitle}>{t.earn}</p>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h2 className={styles.formTitle}>{t.login}</h2>
        <p className={styles.formSubtitle}>{t.enterEmail}</p>
        <input
          type="email"
          placeholder={t.placeholder}
          className={styles.input}
        />
        <button className={styles.button}>{t.continue}</button>
        <p className={styles.poweredBy}>{t.poweredBy}</p>
      </div>
    </div>
  );
};

export default Join;
