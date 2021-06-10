import styled from 'styled-components'

interface DividerProps {
  height?: number
}

export const Divider = styled.div<DividerProps>`
  height: ${(props) => props.height || 24}px;
`
