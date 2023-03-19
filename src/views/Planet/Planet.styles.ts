import styled from 'styled-components';
import { type planetNameType } from '../../types/planet';
import { type nameColorType } from '../../types/theme';

export const Wrapper = styled.div`
  min-height: calc(100vh - 12rem);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(32vh, 1fr) 23.5rem;
  gap: 2.8rem;
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
  grid-row: 1/2;

  padding: 2.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img<{ planetName: planetNameType }>`
  max-width: ${({ theme, planetName }) => theme.planetsMaxSize[planetName]};
`;

export const StyledDescription = styled.div`
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  text-align: center;
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
