import styled from 'styled-components';
import { type ColorType } from '../../../types/theme';
import { BottomBorder } from '../../atoms/BottomBorder/BottomBorder';

export const NavWrapper = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;

  width: 100%;

  @media (min-width: 1024px) {
    flex: 0;

    height: 100%;
    width: auto;
  }
`;

export const StyledLink = styled(BottomBorder)<{ color: ColorType }>`
  display: flex;
  align-items: center;

  height: 100%;

  font-family: ${({ theme }) => theme.fonts.spartan};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  line-height: 2.5rem;
  letter-spacing: 1px;

  opacity: 0.5;

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
