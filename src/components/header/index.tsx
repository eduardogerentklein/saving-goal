import styled from 'styled-components'
import Image from 'next/image'

const StyledHeader = styled.header`
  background-color: var(--white-color-25);
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  padding-left: var(--spacing-11);
  padding-right: var(--spacing-11);

  @media (max-width: 640px) {
    padding-top: var(--spacing-3);
    padding-bottom: var(--spacing-3);
    padding-right: var(--spacing-3);
    padding-left: var(--spacing-3);

    img {
      height: 24px !important;
      width: 75px !important;
    }
  }
`

export const Header = () => (
  <StyledHeader>
    <Image src='/logo.png' alt='Origin logo' width={100} height={32} />
  </StyledHeader>
)
