import styled from 'styled-components'

interface SpanProps {
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
  color?: string
  textAlign?: string
}

export const Span = styled.span<SpanProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
`

Span.defaultProps = {
  fontFamily: 'Work Sans, sans-serif',
  fontWeight: 400,
  fontSize: '20px',
  color: 'var(--primary-color)',
  textAlign: 'center'
}
