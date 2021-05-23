import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface MainLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function MainLayout({
  children,
  title,
  subtitle = 'Как свалить - поиск стран для миграции',
}: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>
          {title} | {subtitle}
        </title>
        <meta
          name="keywords"
          content="путишествия, миграция, работа, учеба, отых, достопримечательности"
        />
        <meta
          name="description"
          content="Страны для путишествия, с целью: работы, учебы и отдыха"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/search">Поиск</Link>
          </li>
          <li>
            <Link href="/country/1">Страна</Link>
          </li>
          <li>
            <Link href="/profile">Профиль</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Футер</footer>
    </div>
  )
}
