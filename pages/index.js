import Link from "next/link";
import groq from "groq";
import client from "../client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Container from "../components/container";

const social = [
  {
    logo: () => (
      <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
    ),
    link: "mailto:marianococirio@gmail.com",
    alt: "Email",
  },
  {
    logo: () => (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
    link: "https://github.com/MFCo",
    alt: "GitHub",
  },
  {
    logo: () => (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
    ),
    link: "https://twitter.com/MarianoCocirio",
    alt: "Twitter",
  },
  {
    logo: () => (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    link: "https://www.linkedin.com/in/mcocirio",
    alt: "LinkedIn",
  },
];

export default function IndexPage({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <Container>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 pb-2 dark:text-gray-200">
        Mariano Cocirio
      </h1>
      <p className="text-xl pb-4 text-gray-800 dark:text-gray-200">
        Product ▲ at{" "}
        <a className="font-bold" target="_blank" href="https://vercel.com">
          Vercel{" "}
        </a>
      </p>
      <div className="sm:bg-white sm:bg-opacity-100 sm:border-2 sm:p-4 mb-4 rounded-lg dark:sm:bg-gray-700">
        <p className="mb-2 dark:text-gray-300">
          Hey! My name is Mariano. I'm from{" "}
          <a
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Rauch,+Buenos+Aires+Province,+Argentina/"
          >
            Rauch
          </a>
          , but I'm living in{" "}
          <a
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Berlin/"
          >
            Berlin
          </a>
          .
        </p>
        <p className="mb-2 dark:text-gray-300">
          I'm a product manager/software engineer who has always been attracted by performance
          and making development easier for everyone.
        </p>
        <p className="mb-2 dark:text-gray-300">
          Also, I've always liked to write,{" "}
          <a className="font-bold" href="/blog" aria-label="Go to my blog">
            you'll find most of my articles at my blog
          </a>
          . I write mainly about Product Management, Software Engineering, and
          also personal experiences.
        </p>
        <p className="mb-2 dark:text-gray-300">
          Currently, I'm a product manager at{" "}
          <a className="font-bold" target="_blank" href="https://vercel.com">
            Vercel
          </a>
          .{" "}
        </p>
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 pt-2 dark:text-gray-200">
        Latest articles
      </h2>
      <ul className="list-disc ml-4 pb-2 dark:text-gray-300">
        {posts.length > 0 &&
          posts.slice(0, 5).map(
            ({ _id, title = "", slug = "", publishedAt = "" }) =>
              slug && (
                <li className="pb-1 mb-2" key={_id}>
                  <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className="italic underline">{title}</a>
                  </Link>{" "}
                  <span className="text-sm">
                    ({new Date(publishedAt).toLocaleDateString("en-GB")})
                  </span>
                </li>
              )
          )}
      </ul>
      <a
        className="italic font-bold text-gray-800 underline py-2 dark:text-gray-300"
        href="/blog"
      >
        {" "}
        Read all articles
      </a>
      <h2 className="text-lg md:text-2xl font-bold text-gray-800 pb-2 pt-4 mt-2 dark:text-gray-300">
        Contact me
      </h2>
      <div className=" flex mb-10">
        {social.map((e) => (
          <a
            key={e.logo}
            href={e.link}
            aria-label={`contact me via ${e.alt}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 w-12 h-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              fill={mounted && resolvedTheme === "dark" ? "#e5e7eb" : "#374151"}
            >
              {e.logo()}
            </svg>
          </a>
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}
