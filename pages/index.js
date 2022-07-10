import Link from 'next/link'
import { useRouter } from 'next/router'
import groq from 'groq'
import client from '../client'
import LocaleSwitcher from '../components/locale-switcher'

export default function IndexPage({ posts }) {
  const router = useRouter()
  const { locale } = router

  return (
    <div>
      <h1>{locale === 'en' ? 'Index page' : 'Inicio'}</h1>
      <p>{locale === 'en' ? 'Current locale: ' : 'Idioma actual: '} {locale}</p>
      <LocaleSwitcher />
      <div>
        <h1>{ locale== 'en' ? 'Welcome to a blog!' : 'Bienvenidos al blog!'}</h1>
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
    *[_type == "post" && publishedAt < now() && __i18n_lang == '${locale}'] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

