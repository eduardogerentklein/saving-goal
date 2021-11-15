import styled from 'styled-components'

import { Color, FontFamily } from '../../utils/constant'

interface SpanProps {
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
  color?: string
  textAlign?: string
}

export const Span = styled.span<SpanProps>`
  color: ${props => `var(${Color[props.color || 'primary']})`};
  font-family: ${props => FontFamily[props.fontFamily || 'workSans']};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};
`

Span.defaultProps = {
  fontWeight: 400,
  fontSize: '20px',
  textAlign: 'center'
}
