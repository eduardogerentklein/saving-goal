import styled from 'styled-components'

interface ButtonProps {
  backgroundColor?: string
  color?: string
  width?: string
  fontWeight?: number
}

export const Button = styled.button<ButtonProps>`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 32px;
  line-height: 1.2;
  font-size: 16px;
  border: none;

  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(27, 49, 168, 0.25);
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

Button.defaultProps = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  width: '320px',
  fontWeight: 600
}
