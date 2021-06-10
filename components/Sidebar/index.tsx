import { useCycle } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { sidebarContainerVariants, sidebarOverlayVariants } from './variants'
import { useDimensions } from 'utils/use-dimensions'
import { IRoute } from 'interfaces/routes'
import {
  StyledSidebar,
  SidebarControl,
  SidebarContainer,
  SidebarNavigation,
  SidebarOverlay,
} from './styles'
import theme from 'styles/theme'

interface SidebarProps {
  items: IRoute[]
  onChange: (isOpen: boolean) => void
}

export function Sidebar({ items, onChange }: SidebarProps) {
  const isMobile = useMediaQuery({
    query: theme.media.medium,
  })
  const containerRef = useRef(null)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    onChange(isOpen)
  }, [isOpen])

  useEffect(() => {
    !isMobile && isOpen && toggleOpen()
  }, [isMobile])

  return (
    <StyledSidebar
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <SidebarControl onClick={toggleOpen} />
      <SidebarContainer variants={sidebarContainerVariants} />
      <SidebarNavigation items={items} />
      <SidebarOverlay
        variants={sidebarOverlayVariants}
        onClick={() => toggleOpen()}
      />
    </StyledSidebar>
  )
}
