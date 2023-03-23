import styled from 'styled-components';
import { type colorType } from '../../../types/theme';

export const BottomBorder = styled.div<{ color: colorType }>`
  position: relative;

  transition: opacity 0.25s ease-in;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;

    width: 0;
    height: 4px;

    background-color: ${({ theme, color }) => theme.colors[color]};

    transition: width 0.25s ease-in;
  }
`;
