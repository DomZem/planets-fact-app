import styled from 'styled-components';
import { Divider } from '../../atoms/Divider/Divider';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem 1.9rem 1.6rem 2.4rem; // 2.1rem on the right site, beasue toggle button have 0.3rem

  background-color: ${({ theme }) => theme.colors.federalBlue};

  ${Divider} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 768px) {
    height: 16rem;

    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    padding: 3.2rem 5.1rem 0 5.1rem;
  }

  @media (min-width: 1024px) {
    height: 8.6rem;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 3.2rem;
  }
`;

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.antonio};
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
`;
