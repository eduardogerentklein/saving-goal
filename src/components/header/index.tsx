import styled from 'styled-components'
import Image from 'next/image'

const StyledHeader = styled.header.attrs({
  className: 'bg-white-25 py-4 px-11'
})`
  padding: 24px 56px 24px 56px;

  @media (max-width: 640px) {
    header {
      padding: 24px 16px 24px 16px;
    }

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
