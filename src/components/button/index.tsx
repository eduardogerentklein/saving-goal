import styled from 'styled-components'

interface ButtonProps {
  backgroundColor?: string
  color?: string
  width?: string
}

export const Button = styled.button.attrs({
  className: 'p-3 font-3 rounded-5'
})<ButtonProps>`
  outline: 'none';
  border: 'none';
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
`

Button.defaultProps = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  width: '320px'
}
