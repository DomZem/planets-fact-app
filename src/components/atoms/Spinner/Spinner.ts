import styled from 'styled-components';
import { type ColorType } from '../../../types/theme';

export const Spinner = styled.div<{ color: ColorType }>`
  position: fixed;
  top: calc(50% - 2.5rem);
  left: calc(50% - 2.5rem);

  width: 5rem;
  height: 5rem;
  border: 0.5rem solid ${({ theme, color }) => theme.colors[color]};
  border-top: 0.5rem solid ${({ theme }) => theme.colors.federalBlue};
  border-radius: 50%;

  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
