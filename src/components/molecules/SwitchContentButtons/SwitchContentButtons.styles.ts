import styled from 'styled-components';
import { type nameColorType } from '../../../types/theme';

export const Wrapper = styled.div`
  position: fixed;
  top: 6.9rem;
  left: 0;
  right: 0;

  height: 5.1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  background-color: ${({ theme }) => theme.colors.federalBlue};
`;

export const StyledButton = styled.button<{
  color: nameColorType;
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

  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    width: ${({ isActive }) => (isActive ? '100%' : 0)};
    height: 4px;
    background-color: ${({ theme, color }) => theme.colors[color]};
  }
`;
