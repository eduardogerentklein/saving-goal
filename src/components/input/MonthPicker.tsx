import styled from 'styled-components'
import Image from 'next/image'

import { Span } from '../typography'
import { Box } from '../box'

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: var(--white-color-25);

  border-width: 1px;
  border-style: solid;
  border-color: var(--white-color-75);
  border-radius: var(--spacing-1);

  margin-bottom: var(--spacing-4);
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);

  width: 100%;
  min-width: 220px;
  height: 56px;
`

const ToggleButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;

  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);

  background-color: var(--white-color-25);
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 3px rgba(77, 100, 117, 0.25);
    background-color: var(--white-color-75);
    border-radius: var(--spacing-1);
  }

  &:hover:enabled {
    background-color: var(--white-color-75);
  }

  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`

const ToggleLeftButton = styled(ToggleButton)``

const ToggleRightButton = styled(ToggleButton)``

const MonthYearBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`

const Month = styled(Span)`
  display: flex;
  align-items: center;

  color: var(--gray-color-100);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  line-height: 2var (--spacing-1);

  @media (max-width: 640px) {
    font-size: var(--font-size-2);
    line-height: 21px;
  }
`

const Year = styled(Span)`
  color: var(--gray-color-25);

  font-size: var(--font-size-2);
  line-height: 21px;
  @media (max-width: 640px) {
    font-size: var(--font-size-1);
    line-height: 16px;
  }
`

export const MonthPicker = () => {
  return (
    <Container aria-label='Month picker box'>
      <ToggleLeftButton
        type='button'
        title='Back month button'
        aria-label='Back month button'
      >
        <Image
          src='/icons/chevron-left.svg'
          width='24'
          height='24'
          alt='Back month icon'
        />
      </ToggleLeftButton>

      <MonthYearBox>
        <Month>February</Month>
        <Year as='small'>2021</Year>
      </MonthYearBox>

      <ToggleRightButton
        type='button'
        title='Forward month button'
        aria-label='Forward month button'
      >
        <Image
          src='/icons/chevron-right.svg'
          width='24'
          height='24'
          alt='Forward month icon'
        />
      </ToggleRightButton>
    </Container>
  )
}
