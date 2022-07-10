import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <div>
      <p>{ activeLocale === 'en' ? 'Switch blog langauge to: ' : 'Cambiar idioma del blog a: '}</p>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
