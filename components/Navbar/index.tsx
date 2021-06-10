import { useEffect, useState } from 'react'

import { IRoute } from 'interfaces/routes'
import {
  NavbarContainer,
  NavbarLogo,
  NavbarLogoText,
  NavbarLogoLine,
  NavbarControls,
  NavbarControl,
} from './styles'
import { navbarVariants, logoLineVariants } from './variants'
import { Sidebar } from 'components/Sidebar'
import HomeSvg from 'public/assets/svg/home.svg'
import SearchSvg from 'public/assets/svg/search.svg'
import ProfileSvg from 'public/assets/svg/profile.svg'

const navigationItems: IRoute[] = [
  {
    text: 'Главная',
    href: '/',
    icon: <HomeSvg />,
  },
  {
    text: 'Поиск',
    href: '/search',
    icon: <SearchSvg />,
  },
  {
    text: 'Профиль',
    href: '/profile',
    icon: <ProfileSvg />,
  },
]

export function Navbar() {
  const [isFloating, setIsFloating] = useState(false)
  const [isSidebar, setSidebar] = useState(false)

  const handleSidebar = (isOpen: boolean) => {
    setSidebar(isOpen)
  }

  useEffect(() => {
    const onScroll = () => {
      setIsFloating(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <NavbarContainer
      animate={isFloating ? 'float' : 'hold'}
      variants={navbarVariants}
    >
      <Sidebar onChange={handleSidebar} items={navigationItems} />
      <NavbarLogo>
        <NavbarLogoText>Как свалить</NavbarLogoText>
        <NavbarLogoLine
          animate={isSidebar ? 'open' : 'closed'}
          variants={logoLineVariants}
        />
      </NavbarLogo>
      <NavbarControls>
        {navigationItems.map((item, idx) => (
          <NavbarControl key={idx} item={item} />
        ))}
      </NavbarControls>
    </NavbarContainer>
  )
}
