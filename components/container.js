import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import ThemeChanger from "./theme-changer";

export default function Container(props) {
  const { children, title, image } = props;
  const router = useRouter();
  const meta = {
    title: title || "Mariano Cocirio",
    description: `Product Manager & System Engineer building the future of agents at Google DeepMind.`,
    description: `Product Manager & System Engineer building the future of agents at Google DeepMind.`,
    type: "website",
  };

  return (
    <div className="flex flex-col min-h-screen justify-between font-sans">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mcocirio.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://mcocirio.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mariano Cocirio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:site" content="@marianococirio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <div className={cn("flex flex-col justify-center sticky top-0 z-50 backdrop-blur-md transition-colors duration-300", props.navClassName || "bg-surface-light dark:bg-deep-black bg-opacity-80 dark:bg-opacity-80")}>
        <nav className="flex items-center justify-between w-full relative max-w-4xl px-4 mx-auto py-6">
          <div className="flex space-x-6">
            <NextLink
              href="/"
              className={cn(
                router.asPath === "/"
                  ? "text-black dark:text-white font-bold border-b-2 border-accent-light dark:border-neon-lime"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white",
                "uppercase tracking-widest text-sm transition-all pb-1 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700"
              )}>

              <span>Home</span>

            </NextLink>
            <NextLink
              href="/blog"
              className={cn(
                router.asPath.includes("/blog")
                  ? "text-black dark:text-white font-bold border-b-2 border-accent-light dark:border-neon-lime"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white",
                "uppercase tracking-widest text-sm transition-all pb-1 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700"
              )}>

              <span>Blog</span>

            </NextLink>
          </div>
          <ThemeChanger />
        </nav>
      </div>
      <main className={cn("flex flex-col mb-auto w-full mx-auto", props.className || "mt-12")}>
        {children}
      </main>
      <footer className="w-full max-w-4xl mx-auto px-4 py-12 text-gray-500 text-sm uppercase tracking-widest">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center">
          <span>Mariano Fernandez Cocirio © 2026</span>
        </div>
      </footer>
    </div>
  );
}
