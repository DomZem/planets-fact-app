import styled from 'styled-components';
import { ViewWrapper } from '../../atoms/ViewWrapper/ViewWrapper';

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.6rem;

  @media (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 3/4;

    grid-template-columns: repeat(auto-fit, minmax(16.4rem, 1fr));
  }

  @media (min-width: 1024px) {
    grid-row: 4/5;
  }
`;

export const StyledListItem = styled(ViewWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;

  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.72px;

  opacity: 0.5;

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
    line-height: 2.5rem;
  }
`;

export const StyledValue = styled.h3`
  font-size: 2rem;
  letter-spacing: -0.75px;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    letter-spacing: -0.9px;
  }

  @media (min-width: 1024px) {
    font-size: 3.4rem;
    letter-spacing: -1.5px;
  }
`;
