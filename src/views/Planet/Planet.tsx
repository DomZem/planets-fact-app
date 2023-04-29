import { useEffect, useState } from 'react';
import SourceLink from '../../components/atoms/SourceLink/SourceLink';
import { Spinner } from '../../components/atoms/Spinner/Spinner';
import StatisticsList from '../../components/organisms/StatisticsList/StatisticsList';
import SwitchContentButtons from '../../components/organisms/SwitchContentButtons/SwitchContentButtons';

import { usePlanet } from '../../hooks/usePlanet';
import { type ContentNameType } from '../../types/planet';
import {
  StyledContent,
  StyledContentWrapper,
  StyledErrorWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledSpinnerWrapper,
  StyledSurfaceImage,
  StyledTitle,
  Wrapper,
} from './Planet.styles';

const Planet = () => {
  const { planet, planetName, isLoading, isError } = usePlanet();
  const [contentName, setContentName] = useState<ContentNameType>('overview');

  const handleSetContentName = (contentName: ContentNameType) => {
    setContentName(contentName);
  };

  useEffect(() => {
    setContentName('overview');
  }, [planetName]);

  if (isLoading) {
    return (
      <StyledSpinnerWrapper>
        <Spinner color={planetName !== undefined ? planetName : 'white'} />
      </StyledSpinnerWrapper>
    );
  } else if (isError) {
    return (
      <StyledErrorWrapper>
        <h2>Sorry, we were unable to fetch planet data. Please try again later.</h2>
      </StyledErrorWrapper>
    );
  } else if (planet !== undefined) {
    return (
      <Wrapper>
        <StyledImageWrapper>
          <StyledImage
            key={planet.name}
            planetName={planet.name}
            src={contentName === 'structure' ? planet.images.structure.url : planet.images.overview.url}
          />
          {contentName === 'surface' && <StyledSurfaceImage key={planet.name} src={planet.images.surface.url} />}
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
    );
  } else {
    return null;
  }
};

export default Planet;
