import styled from 'styled-components'

export const Label = styled.label`
  font-family: Work Sans, sans-serif;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-1);
  line-height: var(--line-height-3);
  color: var(--gray-color-100);

  text-align: left;

  @media (max-width: 640px) {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
  }
`
