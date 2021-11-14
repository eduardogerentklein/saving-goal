import type { NextPage } from 'next'
import styled from 'styled-components'

import { Button } from '../components/button'
import { Box } from '../components/box'
import { Span, H1 } from '../components/typography'

const Main = styled.main`
  padding: 48px 0px 48px 0px;
  width: 560px;
  margin: 0 auto;

  @media (max-width: 640px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
`
const StyledBox = styled(Box)`
  background-color: var(--white-color-25);
  padding: 35px 40px 35px 40px;

  @media (max-width: 640px) {
    padding: 35px 24px 35px 24px;
  }
`

const StyledH1 = styled(H1)`
  padding-bottom: 24px;
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 21.6px;
  }
`

const StyledSpan = styled(Span)`
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 21.6px;
  }
`
const Index: NextPage = () => (
  <Main>
    <StyledH1>
      Let's plan your&nbsp;
      <StyledSpan fontWeight={600}>saving goal.</StyledSpan>
    </StyledH1>
    <StyledBox>
      <Button>Confirm</Button>
    </StyledBox>
  </Main>
)

export default Index
