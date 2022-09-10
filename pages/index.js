import Link from 'next/link'
import groq from 'groq'
import client from '../client'

export default function IndexPage({ posts }) {
  return (
    <div>
      <h1>{'Inicio'}</h1>
      <div>
        <h1>{'Bienvenidos al blog!'}</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toLocaleDateString('de-DE')})
              </li>
            )
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

