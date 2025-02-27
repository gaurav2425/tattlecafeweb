import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Speed Dating App | Tattle - Interest-Based Dating</title>
        <meta
          name="description"
          content="Tattle is the best speed dating platform, designed for singles looking for meaningful connections. Match based on shared interests, ensuring an equal male-to-female ratio. Join the future of dating today!"
        />
        <meta
          name="keywords"
          content="speed dating, dating app, interest-based matching, online dating, singles, relationship, dating platform, find love, matchmaking, best dating app"
        />
        <meta name="author" content="Tattle Team" />

        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Best Speed Dating App | Tattle - Interest-Based Dating"
        />
        <meta
          property="og:description"
          content="Join Tattle, the ultimate speed dating platform that matches users based on interests. Find your perfect match with a balanced male-to-female ratio."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://tattle.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Speed Dating App | Tattle - Interest-Based Dating"
        />
        <meta
          name="twitter:description"
          content="Join Tattle, the best interest-based speed dating app. Meet singles, find love, and experience a new way of dating online."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://tattle.com" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <h1>Welcome to Tattle - The Best Interest-Based Speed Dating App</h1>
        <p>
          Discover a new way to meet singles through Tattle’s unique
          interest-based matching system. Our platform ensures a balanced
          male-to-female ratio, creating meaningful connections in real-time.
        </p>
      </main>
    </>
  );
}
