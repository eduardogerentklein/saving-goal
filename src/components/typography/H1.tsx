import styled from 'styled-components';

import { Color, FontFamily } from '@Utils/literals';

interface H1Props {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
}

export const H1 = styled.h1<H1Props>`
  font-family: ${props => FontFamily[props.fontFamily || 'workSans']};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => `var(${Color[props.color || 'primary']})`};
  text-align: ${props => props.textAlign};
`;

H1.defaultProps = {
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'center'
};
