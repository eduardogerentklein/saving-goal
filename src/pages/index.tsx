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
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: var(--border-radius-2);

  padding-top: var(--spacing-7);
  padding-bottom: var(--spacing-7);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-8);

  @media (max-width: 640px) {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }
`

const StyledH1 = styled(H1)`
  padding-bottom: 24px;
  margin-top: 0px;
  margin-bottom: 0px;

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

const MonthlyAmountBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);

  @media (max-width: 640px) {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }
`

const MonthlyAmountContainer = styled(Box)`
  margin-bottom: var(--spacing-6);

  background-color: var(--white-color-25);
  border-radius: var(--border-radius-2);

  border-width: 1px;
  border-style: solid;
  border-color: var(--white-color-75);

  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`

const AmountText = styled(Span)`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);

  font-size: var(--font-size-5);
  line-height: 24px;

  @media (max-width: 640px) {
    font-size: var(--font-size-4);
    line-height: 21.6px;
  }
`

const AmountCurrency = styled(Span)`
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);

  font-weight: var(--font-weight-3);
  font-size: var(--font-size-7);
  line-height: 38px;

  @media (max-width: 640px) {
    font-size: var(--font-size-6);
    line-height: 28.8px;
  }
`

const PlanningGoalBox = styled(Box)`
  background-color: var(--white-color-50);

  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
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

      <MonthlyAmountContainer>
        <MonthlyAmountBox>
          <AmountText color='gray-100'>Monthly amount</AmountText>
          <AmountCurrency color='secondary'>$0</AmountCurrency>
        </MonthlyAmountBox>
        <PlanningGoalBox>
          <Span>
            You’re planning 1 monthly deposits to reach your $0 goal by November
            2021.
          </Span>
        </PlanningGoalBox>
      </MonthlyAmountContainer>

      <ConfirmBox>
        <Button>Confirm</Button>
      </ConfirmBox>
    </StyledBox>
  </Main>
)

export default Index
