import { Divider } from 'styles/components'
import { Button } from 'components/Button'
import {
  StyledContainer,
  Hero,
  HeroTitle,
  HeroSubtitle,
  HeroTop,
  HeroCenter,
  HeroBottom,
  HeroLeftSection,
  HeroRightSection,
  SectionTitle,
  SectionActions,
  SectionDescription,
} from './styles'
import RestSvg from 'public/assets/svg/rest.svg'
import StudySvg from 'public/assets/svg/study.svg'
import WorkSvg from 'public/assets/svg/work.svg'
import SearchSvg from 'public/assets/svg/search.svg'

export function HomeContainer() {
  return (
    <StyledContainer>
      <Hero>
        <HeroTop />
        <HeroCenter>
          <HeroTitle>Найдите подходящую страну</HeroTitle>
          <Divider height={48} />
          <HeroSubtitle>
            Должны быть миллиарды и миллионы причин <br /> & <br />
            Есть огромное количество вариантов
          </HeroSubtitle>
        </HeroCenter>
        <HeroBottom>
          <HeroLeftSection>
            <SectionTitle>Выберите направление</SectionTitle>
            <Divider height={18} />
            <SectionActions>
              <Button leftIcon={<RestSvg />}>Отдых</Button>
              <Button leftIcon={<StudySvg />}>Учеба</Button>
              <Button leftIcon={<WorkSvg />}>Работа</Button>
            </SectionActions>
            <Divider height={12} />
            <SectionDescription>
              Поможет в поиске нужнйо информации
            </SectionDescription>
          </HeroLeftSection>
          <HeroRightSection>
            <SectionTitle>Перейти к поиску</SectionTitle>
            <Divider height={18} />
            <SectionActions>
              <Button leftIcon={<SearchSvg />}>Поиск</Button>
            </SectionActions>
            <Divider height={12} />
            <SectionDescription>
              Страны, места, события, университеты, профессии
            </SectionDescription>
          </HeroRightSection>
        </HeroBottom>
      </Hero>
    </StyledContainer>
  )
}
