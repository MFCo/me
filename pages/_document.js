import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-surface-light dark:bg-deep-black text-gray-900 dark:text-gray-100 min-h-screen selection:bg-neon-lime selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
