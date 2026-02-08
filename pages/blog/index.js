import Link from "next/link";
import groq from "groq";
import client from "../../client";
import Container from "../../components/container";

export default function IndexPage({ posts }) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16 px-4">
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="mb-12 text-gray-600 dark:text-gray-400 text-lg">
          Insights on Product Management, Engineering, and Life.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {posts.length > 0 &&
            posts.map(
              ({ _id, title = "", slug = "", publishedAt = "" }) =>
                slug && (
                  <Link
                    key={_id}
                    href="/blog/[slug]"
                    as={`/blog/${slug.current}`}
                    className="group block p-6 border border-gray-200 dark:border-gray-800 rounded-none hover:border-accent-light dark:hover:border-white transition-all hover:shadow-[8px_8px_0px_0px_rgba(8,145,178,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] bg-surface-light dark:bg-surface-dark"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-2 text-black dark:text-white group-hover:underline decoration-2 underline-offset-4 decoration-accent-light dark:decoration-neon-lime transition-all">
                          {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-mono mt-2">
                          {new Date(publishedAt).toLocaleDateString("en-GB", {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <span className="text-2xl text-accent-light dark:text-white group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </Link>
                )
            )}
        </div>
      </div>
    </Container >
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
