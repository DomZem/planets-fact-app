import styled from 'styled-components';
import { type colorType } from '../../../types/theme';

export const Spinner = styled.div<{ color: colorType }>`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);

  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme, color }) => theme.colors[color]};
  border-top: 5px solid ${({ theme }) => theme.colors.federalBlue};
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
