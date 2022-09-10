import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import { CodeBlock, vs2015 } from "react-code-blocks";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  block: {
    h3: ({ children }) => (
      <h1 className="text-3xl font-bold pb-4 text-gray-800">{children}</h1>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return <img alt={value.alt || " "} loading="lazy" src={urlFor(value)} />;
    },
    code: ({ value }) => {
      return (
        <div className="font-mono py-4">
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
    name = "Missing name",
    categories,
    body = [],
  } = post;
  return (
    <div className="max-w-2xl">
      <article>
        <h1 className="text-5xl font-bold pb-4 text-gray-800">{title}</h1>
        <span className="text-xl pb-8 text-gray-800">By {name}</span>
        {categories && (
          <p>
            Posted in:
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </p>
        )}
        <PortableText value={body} components={ptComponents} />
      </article>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
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
