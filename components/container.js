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
    description: `Product manager, front-end developer, and web enthusiast`,
    image: image || "https://i.postimg.cc/t4TH7WDw/avatar.png",
    type: "website",
  };

  return (
    (<div className="flex flex-col h-screen justify-between">
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
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@marianococirio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="flex flex-col justify-center">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 mx-auto pt-4 pb-4 sm:pt-8 sm:pb-16 text-gray-600">
          <div>
            <NextLink
              href="/"
              className={cn(
                router.asPath === "/"
                  ? "font-semibold text-gray-600 dark:text-gray-200 border-1 border-gray-600"
                  : "font-normal text-gray-500 dark:text-gray-400",
                "inline-block p-1 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-200 transition-all"
              )}>

              <span>Home</span>

            </NextLink>
            <NextLink
              href="/blog"
              className={cn(
                router.asPath.includes("/blog")
                  ? "font-semibold text-gray-600 dark:text-gray-200 border-1 border-gray-600"
                  : "font-normal text-gray-500 dark:text-gray-400",
                "inline-block p-1 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-200 transition-all"
              )}>

              <span>Blog</span>

            </NextLink>
          </div>
          <ThemeChanger />
        </nav>
      </div>
      <main className="flex flex-col mb-auto">
        <div className="flex items-center justify-between w-full relative max-w-2xl mx-auto text-gray-600">
          <div>{children}</div>
        </div>
      </main>
      <footer className="w-full max-w-2xl border-t-2 mx-auto pt-4 pb-8 text-gray-600 dark:text-gray-300">
        Mariano Fernandez Cocirio © 2024
      </footer>
    </div>)
  );
}
