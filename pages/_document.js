import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>
      <body className="bg-surface-light dark:bg-deep-black text-gray-900 dark:text-gray-100 min-h-screen selection:bg-neon-lime selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
