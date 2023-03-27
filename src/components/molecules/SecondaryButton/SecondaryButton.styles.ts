import styled from 'styled-components';
import { type ColorType } from '../../../types/theme';
import { BottomBorder } from '../../atoms/BottomBorder/BottomBorder';

export const ButtonWrapper = styled(BottomBorder)<{
  color: ColorType;
  isActive: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8rem;
  height: 5.1rem;

  background-color: transparent;

  line-height: 1rem;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

  &::before {
    width: ${({ isActive }) => (isActive ? '100%' : 0)};
  }
`;
