import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import ErrorPage from 'next/error'
import { PortableText } from "@portabletext/react";
import client from "../../client";
import { CodeBlock, vs2015 } from "react-code-blocks";
import Container from "../../components/container";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  marks: {
    link: ({ value, children }) => (
      <a
        className="underline decoration-accent-light dark:decoration-neon-lime decoration-2 underline-offset-4 hover:bg-accent-light hover:text-white dark:hover:bg-neon-lime dark:hover:text-black transition-all font-bold"
        href={value?.href}
        target="_blank"
        rel="noindex nofollow noopener noreferrer"
      >
        {children}
      </a>
    ),
    em: ({ children }) => (
      <em className="font-mono text-accent-light dark:text-neon-lime not-italic">
        {children}
      </em>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-display font-bold mt-12 mb-6 text-black dark:text-white border-l-4 border-accent-light dark:border-neon-lime pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-display font-bold mt-8 mb-4 text-black dark:text-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-sans text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-light dark:border-neon-lime pl-4 my-8 italic text-xl text-gray-900 dark:text-gray-100 bg-surface-light dark:bg-surface-dark p-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 text-lg text-gray-800 dark:text-gray-300 marker:text-accent-light dark:marker:text-neon-lime">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-6 text-lg text-gray-800 dark:text-gray-300 marker:text-accent-light dark:marker:text-neon-lime font-mono">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-10">
          <img
            className="w-full h-auto border border-gray-200 dark:border-gray-800"
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)}
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => {
      return (
        <div className="font-mono my-8 text-sm border border-gray-800 rounded-none overflow-hidden">
          <CodeBlock
            text={value.code}
            language={value.language}
            showLineNumbers
            theme={vs2015}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              borderRadius: 0,
              backgroundColor: '#121212',
            }}
          />
        </div>
      );
    },
  },
};

const Post = ({ post = { title: "Whoops, no article found :(", body: [] } }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />
  }
  const { title = "Missing title", body = [], mainImage } = post;
  return (
    <Container
      title={`${title} - Mariano Cocirio`}
      image={mainImage && urlFor(mainImage).url()}
    >
      <article className="max-w-4xl mx-auto mb-16 px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-black dark:text-white leading-tight">
            {title}
          </h1>
          {mainImage && (
            <div className="relative w-full aspect-video mb-8 border border-gray-200 dark:border-gray-800">
              <img
                className="object-cover w-full h-full"
                src={urlFor(mainImage).url()}
                alt={title}
              />
            </div>
          )}
          <div className="w-20 h-1 bg-accent-light dark:bg-neon-lime mx-auto"></div>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none font-sans">
          <PortableText value={body} components={ptComponents} />
        </div>
      </article>
    </Container>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  mainImage,
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}

export default Post;
