import { ReactNode } from 'react'
import Head from 'next/head'
import ReactTooltip from 'react-tooltip'

import Mounter from 'utils/Mounter'
import { Navbar } from 'components/Navbar'
import { LayoutContainer } from './styles'
import theme from 'styles/theme'

interface MainLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function BaseLayout({
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
          content="путешествия, миграция, работа, учеба, отых, достопримечательности"
        />
        <meta
          name="description"
          content="Страны для путишествия, с целью: работы, учебы и отдыха"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
      <footer>Футер</footer>
      <Mounter>
        <ReactTooltip
          multiline
          textColor={theme.colors.white}
          backgroundColor={theme.colors.secondary}
        />
      </Mounter>
    </div>
  )
}
