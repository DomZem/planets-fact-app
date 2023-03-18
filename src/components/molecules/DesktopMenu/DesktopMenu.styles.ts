import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { type nameColorType } from '../../../types/theme';

export const Wrapper = styled.nav`
  flex: 1;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;

  @media (min-width: 1024px) {
    flex: 0;

    height: 100%;
    width: auto;
  }
`;

export const StyledLink = styled(NavLink)<{ nameColor: nameColorType }>`
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  transition: opacity 0.25s ease-in;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    width: 0;
    height: 4px;

    background-color: ${({ theme, nameColor }) => theme.colors[nameColor]};

    transition: width 0.25s ease-in;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;

    &::before {
      width: 100%;
    }
  }
`;
