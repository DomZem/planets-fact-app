import { useState } from 'react';
import styled from 'styled-components';
import SourceLink from '../../components/atoms/SourceLink/SourceLink';
import SwitchContentButtons from '../../components/molecules/SwitchContentButtons/SwitchContentButtons';
import { usePlanet } from '../../hooks/usePlanet';
import { type contentNameType } from '../../types/planet';
import {
  StyledDescription,
  StyledImage,
  StyledImageWrapper,
  StyledTitle,
  Wrapper,
} from './Planet.styles';

const Planet = () => {
  const { planet, error } = usePlanet();
  const [contentName, setContentName] = useState<contentNameType>('overview');

  const handleSetContentName = (contentName: contentNameType) => {
    setContentName(contentName);
  };

  return (
    <>
      {!error && planet !== null ? (
        <>
          <Wrapper>
            <SwitchContentButtons
              planetName={planet.name}
              contentName={contentName}
              handleSetContentName={handleSetContentName}
            />

            <StyledImageWrapper>
              <StyledImage
                planetName={planet.name}
                src={
                  contentName === 'structure'
                    ? planet.images.structure.url
                    : planet.images.overview.url
                }
              />
              {contentName === 'surface' && (
                <StyledSurfaceImage src={planet.images.surface.url} />
              )}
            </StyledImageWrapper>

            <StyledDescription>
              <StyledTitle>{planet.name}</StyledTitle>
              <p>{planet[contentName].content}</p>
              <SourceLink
                sourceName="Wikipedia"
                source={planet[contentName].source}
              />
            </StyledDescription>
            <StyledStatistics>
              {planet.statistics.map((stat) => (
                <StyledStat key={stat.title}>
                  <p>{stat.title}</p>
                  <h3>{stat.value}</h3>
                </StyledStat>
              ))}
            </StyledStatistics>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

export const StyledSurfaceImage = styled.img`
  position: absolute;
  left: 50%;
  top: 58%;
  max-width: 15%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const StyledStatistics = styled.ul`
  display: grid;
  gap: 0.8rem;

  @media (min-width: 768px) {
    grid-column: 1/-1;
    grid-row: 3/4;
    grid-template-columns: repeat(auto-fit, minmax(16.4rem, 1fr));
    gap: 1.1rem;
  }

  @media (min-width: 1024px) {
    gap: 2.4rem;
  }
`;

export const StyledStat = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;

  padding: 1.6rem 2.4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-weight: 700;
    font-size: 0.8rem;

    letter-spacing: 0.727273px;
    text-transform: uppercase;

    opacity: 0.5;

    @media (min-width: 1024px) {
      font-size: 1.1rem;
      line-height: 2.5rem;

      letter-spacing: 1px;
    }
  }

  h3 {
    font-size: 2rem;
    letter-spacing: -0.75px;

    @media (min-width: 768px) {
      font-size: 2.4rem;
      letter-spacing: -0.9px;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
      letter-spacing: -1.5px;
    }
  }
`;
export default Planet;
