import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Speed Dating App | Tattle</title>
        <meta
          name="description"
          content="Tattle is the best speed dating platform that matches users based on interests, ensuring an equal male-to-female ratio."
        />
        <meta
          name="keywords"
          content="speed dating, dating app, interest-based matching, Tattle"
        />
        <meta name="author" content="Tattle Team" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Best Speed Dating App | Tattle" />
        <meta
          property="og:description"
          content="Join Tattle, the most exciting speed dating platform that matches users based on interests."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://tattle.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Speed Dating App | Tattle" />
        <meta
          name="twitter:description"
          content="Join Tattle, the most exciting speed dating platform that matches users based on interests."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://tattle.com" />
      </Head>
      <main>
        <h1>Welcome to Tattle</h1>
      </main>
    </>
  );
}
