import styled from 'styled-components';
import Image from 'next/image';

import { Box } from '../box';
import { Label } from '../typography';

interface CurrencyProps {
  onChange?: (value: any) => void;
  disabled?: boolean;
  type?: string;
  label?: string;
  name?: string;
  value?: string | number;
}

const CurrencyStyled = styled.input`
  outline: none;
  font-family: Rubik, sans-serif;
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-2);
  line-height: 28.8px;
  color: var(--gray-color-75);

  border-width: 1px;
  border-style: solid;
  border-color: var(--white-color-75);
  border-radius: var(--border-radius-1);

  margin-top: var(--spacing-1);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-left: var(--spacing-9);

  width: 100%;
  height: 56px;

  &:focus {
    box-shadow: 0 0 0 3px rgba(77, 100, 117, 0.25);
  }

  @media (max-width: 640px) {
    font-size: var(--font-size-5);
    line-height: var(--line-height-4);

    margin-bottom: var(--spacing-3);
    margin-right: 0;
  }
`;

const ImageContainer = styled(Box)`
  position: absolute;
  top: 41px !important;
  left: 16px !important;
`;

const Container = styled(Box)`
  position: relative;
  margin-right: var(--spacing-3);

  @media (max-width: 640px) {
    margin-right: 0px;
  }
`;

export const Currency = ({
  onChange,
  disabled,
  type,
  name,
  label,
  value
}: CurrencyProps) => (
  <Container aria-label='Currency box'>
    <ImageContainer>
      <Image
        src='/icons/dollar-sign.svg'
        alt='Dollar sign'
        width={24}
        height={24}
      />
    </ImageContainer>
    <Label htmlFor={name}>{label}</Label>
    <CurrencyStyled
      id={name}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      aria-label={label}
    ></CurrencyStyled>
  </Container>
);

Currency.defaultProps = {
  type: 'text',
  disabled: false,
  label: 'Total amount',
  name: 'amount'
};
