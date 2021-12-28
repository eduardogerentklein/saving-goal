import { useState, KeyboardEvent } from 'react';

import { add, sub } from 'date-fns';
import styled from 'styled-components';
import Image from 'next/image';

import { Span, Label } from '@Components/typography';
import { Box } from '@Components/box';

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: var(--white-color-25);

  border-width: 1px;
  border-style: solid;
  border-color: var(--white-color-75);
  border-radius: var(--spacing-1);

  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-4);
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);

  width: 100%;
  min-width: 220px;
  height: 56px;
`;

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
    border-radius: var(--spacing-1);
  }

  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const ToggleLeftButton = styled(ToggleButton)``;

const ToggleRightButton = styled(ToggleButton)``;

const MonthYearBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`;

const Month = styled(Span)`
  display: flex;
  align-items: center;

  color: var(--gray-color-100);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  line-height: 2var (--spacing-1);

  @media (max-width: 640px) {
    font-size: var(--font-size-2);
    line-height: var(--line-height-3);
  }
`;

const Year = styled(Span)`
  color: var(--gray-color-25);

  font-size: var(--font-size-2);
  line-height: var(--line-height-3);
  @media (max-width: 640px) {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
  }
`;

interface MonthProps {
  onChange?: (value: Date) => void;
  initialState: Date;
  month?: string;
  year?: Number;
}

export const MonthPicker = ({
  onChange,
  initialState,
  month,
  year
}: MonthProps) => {
  const [reachDate, setReachDate] = useState(initialState);
  const handleDownMonth = () => {
    const subDate = sub(reachDate, { months: 1 });
    if (initialState <= subDate) {
      setReachDate(subDate);
      onChange?.(reachDate);
    }
  };
  const handleForwardMonth = () => {
    setReachDate(add(reachDate, { months: 1 }));
    onChange?.(reachDate);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'ArrowLeft') {
      handleDownMonth();
    } else if (e.code === 'ArrowRight') {
      handleForwardMonth();
    }
  };

  return (
    <Box>
      <Label>Reach goal by</Label>
      <Container aria-label='Month picker box'>
        <ToggleLeftButton
          type='button'
          title='Back month button'
          aria-label='Back month button'
          onClick={() => handleDownMonth?.()}
          onKeyDown={(e: KeyboardEvent) => handleKeyPress?.(e)}
        >
          <Image
            src='/icons/chevron-left.svg'
            width='24'
            height='24'
            alt='Back month icon'
          />
        </ToggleLeftButton>

        <MonthYearBox>
          <Month>{month}</Month>
          <Year as='small'>{year}</Year>
        </MonthYearBox>

        <ToggleRightButton
          type='button'
          title='Forward month button'
          aria-label='Forward month button'
          onClick={() => handleForwardMonth?.()}
          onKeyDown={(e: KeyboardEvent) => handleKeyPress?.(e)}
        >
          <Image
            src='/icons/chevron-right.svg'
            width='24'
            height='24'
            alt='Forward month icon'
          />
        </ToggleRightButton>
      </Container>
    </Box>
  );
};
