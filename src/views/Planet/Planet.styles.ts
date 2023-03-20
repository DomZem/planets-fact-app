import styled from 'styled-components';
import { type planetNameType } from '../../types/planet';

export const Wrapper = styled.div`
  min-height: 100%;
  max-width: 111rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30.1rem, 1fr) 27rem auto;
  gap: 2.4rem;

  padding: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(41rem, 1fr) 25.3rem auto;
  }

  @media (min-width: 1024px) {
    padding-top: 12.6rem;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 32.6rem 1fr auto;
  }
`;

export const StyledImageWrapper = styled.div`
  padding: 2.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }

  @media (min-width: 1024px) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
`;

export const StyledImage = styled.img<{ planetName: planetNameType }>`
  max-width: ${({ theme, planetName }) =>
    theme.planetsMaxSize.mobile[planetName]};

  @media (min-width: 768px) {
    max-width: ${({ theme, planetName }) =>
      theme.planetsMaxSize.tablet[planetName]};
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.antonio};
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.2rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 6.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 8rem;
    line-height: 10.4rem;
  }
`;
