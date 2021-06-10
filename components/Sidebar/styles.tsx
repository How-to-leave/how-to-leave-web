import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { rgba } from 'polished'

import theme from 'styles/theme'
import { StyledNavbarControl } from 'components/Navbar/styles'
import {
  navigationVariants,
  navigationItemVariants,
  iconVariants,
} from './variants'
import { IRoute } from 'interfaces/routes'

export const StyledSidebar = styled(motion.div)`
  display: none;

  @media ${theme.media.medium} {
    display: flex;
  }
`

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={theme.colors.white}
    strokeLinecap="round"
    {...props}
  />
)

export const SidebarControl = ({ onClick }) => (
  <SidebarToggle
    whileHover={{ backgroundColor: rgba(theme.colors.white, 0.5) }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: 'M 2 4 L 19 4' },
          open: { d: 'M 3 3 L 20 20' },
        }}
      />
      <Path
        d="M 2 12 L 21 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 20 L 18 20' },
          open: { d: 'M 3 20 L 20 3' },
        }}
      />
    </svg>
  </SidebarToggle>
)

const SidebarToggle = styled(StyledNavbarControl)`
  position: relative;
  margin-right: 10px;
  z-index: 999;
`

export const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 11;
  background: ${theme.colors.secondary};
`

export const SidebarNavigation = ({ items }: { items: IRoute[] }) => (
  <NavigationItems variants={navigationVariants}>
    {items.map((item, idx) => (
      <Link key={idx} href={item.href}>
        <NavigationItem
          variants={navigationItemVariants}
          whileTap={{ scale: 0.95 }}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <NavigationItemIcon variants={iconVariants}>
            {item.icon}
          </NavigationItemIcon>
          <NavigationItemText>{item.text}</NavigationItemText>
        </NavigationItem>
      </Link>
    ))}
  </NavigationItems>
)

const NavigationItems = styled(motion.ul)`
  position: absolute;
  top: 100px;
  width: 230px;
  z-index: 12;
`

const NavigationItem = styled(motion.li)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.white};
`

const NavigationItemIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  border: 2px solid ${theme.colors.white};
`

const NavigationItemText = styled.div`
  width: 200px;
  height: 20px;
  flex: 1;
  border-bottom: 2px solid ${theme.colors.white};
`

export const SidebarOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${rgba(theme.colors.secondary, 0.6)};
  z-index: 10;
`
