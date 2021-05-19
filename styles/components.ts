import styled from 'styled-components'

interface FlexProps {
  direction: 'row' | 'column'
  align: 'flex-start' | 'center' | 'flex-end'
  justify:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  wrap: 'nowrap' | 'wrap'
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
`

interface DividerProps {
  height?: number
}

export const Divider = styled.div<DividerProps>`
  height: ${(props) => props.height || 24}px;
`
