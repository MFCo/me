import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import Layout from "../components/layout";
import { Inter, Syne, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className={`${inter.variable} ${syne.variable} ${jetbrains_mono.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
