import { useState } from 'react';
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
  const { planet, planetName, isLoading } = usePlanet();
  const [contentName, setContentName] = useState<ContentNameType>('overview');

  const handleSetContentName = (contentName: ContentNameType) => {
    setContentName(contentName);
  };

  if (isLoading) {
    return (
      <StyledSpinnerWrapper>
        <Spinner color={planetName !== undefined ? planetName : 'white'} />
      </StyledSpinnerWrapper>
    );
  }

  if (planet === null) {
    return (
      <StyledErrorWrapper>
        <h2>Sorry, you are out of the solar system. Try maybe later!</h2>
      </StyledErrorWrapper>
    );
  }

  return (
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
  );
};

export default Planet;
