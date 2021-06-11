import styled from 'styled-components'

import { navbarHeight } from 'components/Navbar/styles'
import theme from 'styles/theme'

export const StyledContainer = styled.div`
  color: ${theme.colors.white};
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - ${navbarHeight}px);
  background: ${theme.colors.primary};
  font-size: 16px;

  @media ${theme.media.extraLarge} {
    font-size: 14px;
  }
  @media ${theme.media.large} {
    font-size: 12px;
  }
  @media ${theme.media.medium} {
    font-size: 10px;
  }
  @media ${theme.media.small} {
    font-size: 8px;
  }
`

export const HeroTop = styled.div``

export const HeroCenter = styled.div`
  font-weight: 300;
  text-align: center;
`

export const HeroTitle = styled.div`
  font-size: 4.5em;
`

export const HeroSubtitle = styled.div`
  font-size: 1.75em;
`

export const HeroBottom = styled.div`
  display: grid;
  grid-template: 1fr / repeat(auto-fit, minmax(520px, 1fr));
  width: 1120px;
  background: ${theme.colors.white};
  color: ${theme.colors.secondary};

  @media (max-width: 520px) {
    grid-template: 1fr / repeat(auto-fit, minmax(100%, 1fr));
  }

  @media ${theme.media.extraLarge} {
    width: 100%;
  }
`

export const HeroLeftSection = styled.div`
  padding: 1em 2em;
`

export const HeroRightSection = styled.div`
  padding: 1em 2em;
`

export const SectionTitle = styled.div`
  font-size: 1.75em;
`

export const SectionActions = styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fill, minmax(160px, 1fr));
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;

  @media (max-width: 520px) {
    grid-template: 1fr / repeat(auto-fit, minmax(190px, 1fr));
  }
`

export const SectionDescription = styled.div`
  font-size: 1.25em;
  font-weight: 300;
`
