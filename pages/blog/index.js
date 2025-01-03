import Link from "next/link";
import groq from "groq";
import client from "../../client";
import Container from "../../components/container";

export default function IndexPage({ posts }) {
  return (
    (<Container>
      <h1 className="text-5xl font-bold pb-8 text-gray-800 dark:text-gray-200">
        Blog
      </h1>
      <p className="pb-4 dark:text-gray-300">
        Here you&apos;ll find most of my articles. I write mainly about Product
        Management, Software Engineering, and also some personal experiences.
      </p>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li className="pb-1 dark:text-gray-300" key={_id}>
                <Link
                  href="/blog/[slug]"
                  as={`/blog/${slug.current}`}
                  className="italic underline">
                  {title}
                </Link>{" "}
                <span className="text-sm">
                  ({new Date(publishedAt).toLocaleDateString("en-GB")})
                </span>
              </li>
            )
        )}
    </Container>)
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
