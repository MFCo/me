import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-50 dark:bg-gray-800 dark:bg-opacity-100 min-h-screen bg-opacity-60 px-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
