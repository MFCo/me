import Link from "next/link";
import groq from "groq";
import client from "../client";

const social = [
  { logo: "logos/email.png", link: "mailto:marianococirio@gmail.com" },
  { logo: "logos/github.png", link: "https://github.com/MFCo" },
  { logo: "logos/twitter.png", link: "https://twitter.com/MarianoCocirio" },
  { logo: "logos/linkedin.png", link: "https://www.linkedin.com/in/mcocirio" },
];

export default function IndexPage({ posts }) {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 pb-2">
        Mariano Cocirio
      </h1>
      <p className="text-xl pb-4 text-gray-800">
        Product ▲ at{" "}
        <a className="font-bold" target="_blank" href="https://vercel.com">
          Vercel{" "}
        </a>
      </p>
      <p className="mb-2">
        Hey! My name is Mariano. I'm from{" "}
        <a
          className="font-bold"
          target="_blank"
          href="https://www.google.com/maps/place/Tandil,+Buenos+Aires+Province,+Argentina/"
        >
          Tandil
        </a>
        , but I'm living in{" "}
        <a
          className="font-bold"
          target="_blank"
          href="https://www.google.com/maps/place/Berlin/"
        >
          Berlin
        </a>.
      </p>
      <p className="mb-2">
        I'm a software engineer who has always been attracted by performance and
        making development easier for everyone.
      </p>
      <p className="mb-2">
        Also, I've always liked to write, so here you'll find most of my articles. I
        write mainly about Product Management, Software Engineering, and also
        personal experiences.
      </p>
      <p className="mb-2">
        Currently, I'm a product manager at{" "}
        <a className="font-bold" target="_blank" href="https://vercel.com">
          Vercel
        </a>
        .{" "}
      </p>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 pt-2">
        Latest posts
      </h2>
      {posts.length > 0 &&
        posts.slice(0, 5).map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a className="italic underline">{title}</a>
                </Link>{" "}
                <span className="text-sm">
                ({new Date(publishedAt).toLocaleDateString("en-GB")})
                </span>
              </li>
            )
        )}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 pt-4">
        Contact me
      </h2>
      <div className="flex">
        {social.map((e) => (
          <a key={e.logo} href={e.link} target="_blank" rel="noopener">
            <img src={e.logo} className="w-8 h-8 mr-4" />
          </a>
        ))}
      </div>
    </div>
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
