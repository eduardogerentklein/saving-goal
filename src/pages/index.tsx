import styled from 'styled-components'

import type { NextPage } from 'next'
import Image from 'next/image'

import { Box } from '../components/box'
import { Button } from '../components/button'
import { Currency, MonthPicker } from '../components/input'
import { Span, H1 } from '../components/typography'

const Main = styled.main`
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 0px;
  padding-right: 0px;
  width: 560px;
  margin: 0 auto;

  @media (max-width: 640px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
`

const TitleBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-5);
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

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: row;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const ConfirmBox = styled(Box)`
  display: flex;
  justify-content: center;
`

const GoalBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  margin-left: var(--spacing-4);
`

const HouseText = styled(Span)`
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-6);
  line-height: 28.8px;

  margin-bottom: var(--spacing-1);
  @media (max-width: 640px) {
    font-size: var(--font-size-5);
    line-height: 24px;
  }
`

const SavingGoalText = styled(Span)`
  font-size: var(--font-size-3);
  line-height: 24px;

  @media (max-width: 640px) {
    font-size: var(--font-size-2);
    line-height: 21px;
  }
`

const MonthlyAmount = styled(Box)`
  background-color: var(--white-color-25);
  border-radius: var(--border-radius-2);

  border-width: 1px;
  border-style: solid;
  border-color: var(--white-color-75);

  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`

const Index: NextPage = () => (
  <Main>
    <StyledH1>
      Let's plan your&nbsp;
      <StyledSpan fontWeight={600}>saving goal.</StyledSpan>
    </StyledH1>
    <StyledBox>
      <TitleBox>
        <Image src='/icons/house.svg' alt='House icon' width={64} height={64} />

        <GoalBox>
          <HouseText color='gray-100' fontFamily='rubik'>
            Buy a house
          </HouseText>
          <SavingGoalText color='gray-25'>Saving goal</SavingGoalText>
        </GoalBox>
      </TitleBox>

      <InputContainer>
        <Currency></Currency>
        <MonthPicker></MonthPicker>
      </InputContainer>

      <MonthlyAmount>
        <Span color='gray-100'>Monthly amount</Span>
        <Span color='secondary'>$520.50</Span>
      </MonthlyAmount>

      <ConfirmBox>
        <Button>Confirm</Button>
      </ConfirmBox>
    </StyledBox>
  </Main>
)

export default Index
