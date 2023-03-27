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
  StyledError,
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

  if (isLoading) {
    return <Spinner color={planetName !== undefined ? planetName : 'white'} />;
  }

  if (planet === null) {
    return (
      <StyledError>
        <h2>Sorry, you are out of the solar system. Try maybe later!</h2>
      </StyledError>
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
