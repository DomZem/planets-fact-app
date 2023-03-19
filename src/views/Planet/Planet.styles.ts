import styled from 'styled-components';
import { type planetNameType } from '../../types/planet';
import { type nameColorType } from '../../types/theme';

export const Wrapper = styled.div`
  padding: 5.1rem 2.4rem 4.7rem 2.4rem;
`;

export const StyledSwitchContentButtons = styled.div`
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

export const StyledImageWrapper = styled.div`
  min-height: 32vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img<{ planetName: planetNameType }>`
  max-width: ${({ theme, planetName }) => theme.planetsMaxSize[planetName]};
`;

export const StyledDescription = styled.div`
  height: 23.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  text-align: center;
`;

export const StyledContent = styled.p`
  flex: 1;
`;

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.antonio};
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.2rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
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

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    width: ${({ isActive }) => (isActive ? '100%' : 0)};
    height: 4px;
    background-color: ${({ theme, color }) => theme.colors[color]};
  }
`;
