import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { type planetNameType } from '../../../types/planet';

const openNav = css`
  transform: translateX(0);
`;

const closeNav = css`
  transform: translateX(-100%);
`;

export const Wrapper = styled.nav<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 6.9rem;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 2.4rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.federalBlue};

  transition: transform 0.25s ease-in-out;
  ${({ isMenuOpen }) => (isMenuOpen ? openNav : closeNav)};

  z-index: 990;
`;

export const StyledLink = styled(NavLink)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  padding: 2rem 0;

  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 167%;

  letter-spacing: 1.36364px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  transition: opacity 0.2s ease-in;

  & + & {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  svg {
    margin-left: auto;
    font-size: 2.2rem;
  }

  &.active {
    opacity: 1;
  }
`;

export const StyledPlanetIcon = styled.div<{ planetName: planetNameType }>`
  width: 2rem;
  height: 2rem;

  border-radius: 100%;

  background-color: ${({ theme, planetName }) => theme.colors[planetName]};
`;
