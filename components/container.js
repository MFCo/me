import Head from "next/head";
import { useRouter } from "next/router";
import cn from "classnames";

export default function Container(props) {
  const { children, title, image } = props;
  const router = useRouter();
  const meta = {
    title: title || "Mariano Cocirio",
    description: `Product Manager & Systems Engineer building the future of agents at Google DeepMind.`,
    type: "website",
  };

  return (
    <>
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
        <meta name="twitter:site" content="@marianococirio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <main className={cn("flex flex-col mb-auto w-full mx-auto", props.className || "mt-12")}>
        {children}
      </main>
    </>
  );
}
