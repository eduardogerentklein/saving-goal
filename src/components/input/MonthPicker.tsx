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
  border-radius: 4px;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;

  width: 100%;
  min-width: 220px;
  height: 56px;
`

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;

  &:focus {
    box-shadow: 0 0 0 3px rgba(77, 100, 117, 0.25);
    background-color: var(--white-color-75);
  }

  @media (max-width: 640px) {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 12px;
    padding-right: 12px;
  }
`

const ToggleLeftButton = styled(ToggleButton)``

const ToggleRightButton = styled(ToggleButton)``

const Month = styled(Span)`
  display: flex;
  align-items: center;

  color: var(--gray-color-100);
  font-weight: var(--font-weight-3);

  @media (max-width: 640px) {
    font-size: var(--font-size-2);
  }
`

export const MonthPicker = () => (
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

    <Month>February</Month>

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
