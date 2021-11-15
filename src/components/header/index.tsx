import styled from 'styled-components'
import Image from 'next/image'

const StyledHeader = styled.header`
  background-color: var(--white-color-25);
  padding: 24px 56px 24px 56px;

  @media (max-width: 640px) {
    padding: 16px 16px 16px 16px;

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
