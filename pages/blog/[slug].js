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
        className="underline text-gray-800 font-bold dark:text-gray-200"
        href={value?.href}
        target="_blank"
        rel="noindex nofollow"
      >
        {children}
      </a>
    ),
    em: ({ children }) => (
      <em className="font-mono bg-gray-200 px-1 rounded-sm text-base not-italic dark:text-gray-800 dark:bg-gray-300">
        {children}
      </em>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold pb-4 pt-4 text-gray-800 dark:text-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold pb-3 pt-3 text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-sans text-lg pb-2 dark:text-gray-300">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc font-sans p-2 ml-4 text-lg dark:text-gray-200">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal font-sans text-lg py-2 ml-8 dark:text-gray-200">
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
        <img
          className="py-4 mx-auto"
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)}
        />
      );
    },
    code: ({ value }) => {
      return (
        <div className="font-mono py-4 text-sm rounded-full">
          <CodeBlock
            text={value.code}
            language={value.language}
            showLineNumbers
            theme={vs2015}
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
      <div className="max-w-xs sm:max-w-2xl pb-8">
        <article>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            {title}
          </h1>
          <PortableText value={body} components={ptComponents} />
        </article>
      </div>
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
