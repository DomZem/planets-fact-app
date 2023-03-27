import styled from 'styled-components';
import { type ColorType } from '../../../types/theme';
import { ViewWrapper } from '../../atoms/ViewWrapper/ViewWrapper';

export const ButtonWrapper = styled(ViewWrapper)<{
  color: ColorType;
  isActive: boolean;
}>`
  border-color: ${({ theme, color, isActive }) => isActive && theme.colors[color]};

  background-color: ${({ theme, color, isActive }) => (isActive ? theme.colors[color] : 'transparent')};

  text-align: left;
  line-height: 278%;

  transition-property: background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;

  &:hover {
    background-color: ${({ isActive }) => !isActive && '#a6a6a6'};
  }

  span {
    margin-right: 1.4rem;

    opacity: 0.5;
  }
`;
