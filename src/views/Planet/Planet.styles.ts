import styled from 'styled-components';
import { type planetNameType } from '../../types/planet';

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30.1rem, 1fr) auto auto;
  gap: 2.4rem;

  max-width: 144rem;
  min-height: 100%;
  padding: 2.4rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(41rem, 1fr) auto auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 10fr 1fr auto;
    gap: 0;
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }

  @media (min-width: 1024px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;

export const StyledImage = styled.img<{ planetName: planetNameType }>`
  max-width: ${({ theme, planetName }) => theme.planetsMaxSize.mobile[planetName]};

  @media (min-width: 768px) {
    max-width: ${({ theme, planetName }) => theme.planetsMaxSize.tablet[planetName]};
  }

  @media (min-width: 1024px) {
    max-width: ${({ theme, planetName }) => theme.planetsMaxSize.desktop[planetName]};
  }
`;

export const StyledSurfaceImage = styled.img`
  position: absolute;
  left: 50%;
  top: 58%;

  max-width: 15%;

  transform: translateX(-50%);
  z-index: 1;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    gap: 2.4rem;
  }

  @media (min-width: 1024px) {
    grid-column: 3/4;
    grid-row: 2/3;

    flex-direction: column;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  max-width: 40rem;
  height: 27rem;

  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;

    max-width: 48.7%;
    height: 25rem;

    text-align: left;
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    height: 32rem;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 4rem;
  line-height: 5.2rem;

  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 6.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 8rem;
    line-height: 10.4rem;
  }
`;
