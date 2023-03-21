import styled from 'styled-components';
import { type nameColorType } from '../../../types/theme';

export const Wrapper = styled.button<{
  nameColor: nameColorType;
  isActive: boolean;
}>`
  padding: 0.8rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 278%;

  letter-spacing: 1.92857px;
  text-transform: uppercase;
  text-align: left;

  border-color: ${({ theme, nameColor, isActive }) => isActive && theme.colors[nameColor]};
  background-color: ${({ theme, nameColor, isActive }) => (isActive ? theme.colors[nameColor] : 'transparent')};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.25s ease-in;

  &:hover {
    background-color: ${({ theme, nameColor, isActive }) => !isActive && '#b6b6b6'};
  }
  span {
    margin-right: 1.4rem;
    opacity: 0.5;
  }
`;
