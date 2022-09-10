import Link from 'next/link'
import { useRouter } from 'next/router'
import groq from 'groq'
import client from '../client'

export default function IndexPage({ posts }) {
  const router = useRouter()
  const { locale } = router

  return (
    <div>
      <h1>{'Inicio'}</h1>
      <p>{'Idioma actual: '} {locale}</p>
      <div>
        <h1>{'Bienvenidos al blog!'}</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toLocaleDateString(locale)})
              </li>
            )
        )}
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

