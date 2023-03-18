import styled from 'styled-components';
import { Divider } from '../../components/atoms/Divider/Divider';
import { type nameColorType } from '../../types/theme';

export const Wrapper = styled.div``;

export const StyledSwitchContentButtons = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 5.1rem;
  top: 6.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2.4rem;

  background-color: ${({ theme }) => theme.colors.federalBlue};

  ${Divider} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const StyledButton = styled.button<{
  nameColor: nameColorType;
  isActive: boolean;
}>`
  position: relative;

  height: 100%;
  width: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1rem;
  letter-spacing: 1.92857px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    width: ${({ isActive }) => (isActive ? '100%' : 0)};
    height: 4px;
    background-color: ${({ theme, nameColor }) => theme.colors[nameColor]};
  }
`;
