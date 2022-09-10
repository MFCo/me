import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-600 border-1 border-gray-600"
            : "font-normal text-gray-500",
          "inline-block p-1 px-3 py-2 rounded-lg hover:bg-blue-200 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const { children } = props;
  const router = useRouter();
  const meta = {
    title: "Mariano Cocirio – Product manager.",
    description: `Product manager, front-end developer, and JavaScript enthusiast.`,
    image:
      "https://mcocirio.com/avatar.png",
    type: "website",
  };

  return (
    <div className="bg-gray-50 min-h-screen bg-opacity-60 px-8">
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
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-green-200 mx-auto pt-4 pb-4 sm:pt-8 sm:pb-16 text-gray-600">
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Blog" />
          </div>
        </nav>
      </div>
      <main className="flex flex-col">
        <div className="flex items-center justify-between w-full relative max-w-2xl mx-auto text-gray-600">
          {children}
        </div>
      </main>
    </div>
  );
}
