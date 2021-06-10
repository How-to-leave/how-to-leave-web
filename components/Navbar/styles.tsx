import styled from 'styled-components'
import Link from 'next/link'
import { rgba } from 'polished'
import { motion } from 'framer-motion'

import { IRoute } from 'interfaces/routes'
import theme from 'styles/theme'

export const navbarHeight = 50

export const NavbarContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: ${navbarHeight}px;
  padding: 0 20px;
  background: ${theme.colors.primary};

  @media ${theme.media.medium} {
    justify-content: flex-start;
  }
`

export const NavbarLogo = styled.div`
  position: relative;
  color: ${theme.colors.white};
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
  z-index: 11;
`

export const NavbarLogoText = styled.div``
export const NavbarLogoLine = styled(motion.div)`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 3px;
  background: ${(props) => props.theme.colors.white};
`

export const NavbarControls = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 12px;
  color: ${theme.colors.white};

  @media ${theme.media.medium} {
    display: none;
  } ;
`

export const StyledNavbarControl = styled(motion.div)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.white};
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
`

interface ControlProps {
  item: IRoute
}

export const NavbarControl = ({ item }: ControlProps) => (
  <Link href={item.href}>
    <StyledNavbarControl
      whileHover={{
        backgroundColor: rgba(theme.colors.white, 0.5),
      }}
      whileTap={{ scale: 0.95 }}
      data-tip={item.text}
    >
      {item.icon}
    </StyledNavbarControl>
  </Link>
)
