import { useState } from 'react';
import SourceLink from '../../components/atoms/SourceLink/SourceLink';
import { Spinner } from '../../components/atoms/Spinner/Spinner';
import StatisticsList from '../../components/organisms/StatisticsList/StatisticsList';
import SwitchContentButtons from '../../components/organisms/SwitchContentButtons/SwitchContentButtons';

import { usePlanet } from '../../hooks/usePlanet';
import { type contentNameType } from '../../types/planet';
import {
  StyledContent,
  StyledContentWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledSurfaceImage,
  StyledTitle,
  Wrapper,
} from './Planet.styles';

const Planet = () => {
  const { planet, planetName, isLoading } = usePlanet();
  const [contentName, setContentName] = useState<contentNameType>('overview');

  const handleSetContentName = (contentName: contentNameType) => {
    setContentName(contentName);
  };

  return (
    <>
      {isLoading ? (
        <Spinner color={planetName !== undefined ? planetName : 'white'} />
      ) : planet !== null ? (
        <Wrapper>
          <StyledImageWrapper>
            <StyledImage
              planetName={planet.name}
              src={contentName === 'structure' ? planet.images.structure.url : planet.images.overview.url}
            />
            {contentName === 'surface' && <StyledSurfaceImage src={planet.images.surface.url} />}
          </StyledImageWrapper>

          <StyledContentWrapper>
            <StyledContent>
              <StyledTitle>{planet.name}</StyledTitle>
              <p>{planet[contentName].content}</p>
              <SourceLink sourceName="Wikipedia" source={planet[contentName].source} />
            </StyledContent>
            <SwitchContentButtons
              color={planet.name}
              contentName={contentName}
              handleSetContentName={handleSetContentName}
            />
          </StyledContentWrapper>

          <StatisticsList statistics={planet.statistics} />
        </Wrapper>
      ) : (
        <p>Sorry try maybe later!</p>
      )}
    </>
  );
};

export default Planet;
