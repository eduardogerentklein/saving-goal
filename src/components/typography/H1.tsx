import styled from 'styled-components'

interface H1Props {
  fontFamily?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  textAlign?: string
}

export const H1 = styled.h1<H1Props>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
`

H1.defaultProps = {
  fontFamily: 'Work Sans, sans-serif',
  fontWeight: '400',
  fontSize: '20px',
  color: 'var(--primary-color)',
  textAlign: 'center'
}
