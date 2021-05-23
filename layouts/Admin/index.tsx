import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Container, Navbar, NavbarInner, NavbarItem, Content } from './styles'

const adminRoutes = {
  countries: '/admin/countries',
  users: '/admin/users',
}

interface AdminLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function AdminLayout({
  children,
  title,
  subtitle = 'Админпанель',
}: AdminLayoutProps) {
  const router = useRouter()

  const handleLink = (href: string) => {
    router.push(href)
  }

  return (
    <div>
      <Head>
        <title>
          {title} | {subtitle}
        </title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar>
          <NavbarInner>
            <NavbarItem
              onClick={handleLink.bind(null, adminRoutes.countries)}
              isActive={router.asPath === adminRoutes.countries}
            >
              Страны
            </NavbarItem>
            <NavbarItem
              onClick={handleLink.bind(null, adminRoutes.users)}
              isActive={router.asPath === adminRoutes.users}
            >
              Пользователи
            </NavbarItem>
          </NavbarInner>
          <NavbarInner>
            <NavbarItem onClick={handleLink.bind(null, '/')} isActive={false}>
              Главная
            </NavbarItem>
            <NavbarItem onClick={handleLink.bind(null, '/')} isActive={false}>
              Выйти
            </NavbarItem>
          </NavbarInner>
        </Navbar>
        <Content>{children}</Content>
      </Container>
    </div>
  )
}
