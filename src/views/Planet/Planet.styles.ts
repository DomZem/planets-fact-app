import styled from 'styled-components';
import { type planetNameType } from '../../types/planet';

export const Wrapper = styled.div`
  padding: 2.4rem;

  min-height: calc(100vh - 12rem);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 1fr) 27rem auto;

  gap: 2.4rem;
`;

export const StyledImageWrapper = styled.div`
  padding: 2.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img<{ planetName: planetNameType }>`
  max-width: ${({ theme, planetName }) => theme.planetsMaxSize[planetName]};
`;

export const StyledDescription = styled.div`
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
