import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import { CodeBlock, vs2015 } from "react-code-blocks";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  marks: {
    link: ({ value, children }) => (
      <a className="underline text-gray-800 font-bold" href={value?.href} target="_blank" rel="noindex nofollow">
        {children}
      </a>
    ),
    em: ({ children }) => <em className="font-mono bg-gray-200 px-1 rounded-sm text-base not-italic">{children}</em>,
  },
  block: {
    h3: ({ children }) => (
      <h1 className="text-2xl font-bold pb-4 pt-8 text-gray-800">{children}</h1>
    ),
    normal: ({ children }) => <p className="font-sans text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pb-2 ml-4 text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal text-lg py-2 ml-8">{children}</ol>
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

const Post = ({ post = {} }) => {
  const {
    title = "Missing title",
    categories,
    body = [],
  } = post;
  return (
    <div className="max-w-xs sm:max-w-2xl pb-8">
      <article>
        <h1 className="text-3xl sm:text-4xl font-bold pb-4 text-gray-800">{title}</h1>
        {categories && (
          <div className="flex flex-wrap pt-2">
            {categories.map((category) => (
              <span className="text-sm font-bold border-pink-300 py-1 my-1 bg-pink-100 px-2 mr-2 rounded-full border-2 text-pink-800" key={category}>{category}</span>
            ))}
          </div>
        )}
        <PortableText value={body} components={ptComponents} />
      </article>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  body
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
