import styled from 'styled-components'

import { navbarHeight } from 'components/Navbar/styles'
import theme from 'styles/theme'

export const StyledContainer = styled.div`
  color: ${theme.colors.white};
`

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${navbarHeight}px);
  background: ${theme.colors.primary};

  font-size: 5vw;
  font-weight: 300;
  text-align: center;
`
