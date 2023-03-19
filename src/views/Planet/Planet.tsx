import SourceLink from '../../components/atoms/SourceLink/SourceLink';
import { usePlanet } from '../../hooks/usePlanet';
import {
  StyledButton,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageWrapper,
  StyledSwitchContentButtons,
  StyledTitle,
  Wrapper,
} from './Planet.styles';

const Planet = () => {
  const { planet, error } = usePlanet();

  return (
    <>
      {!error && planet !== null ? (
        <Wrapper>
          <StyledSwitchContentButtons>
            <StyledButton isActive={true} color={planet.name}>
              overview
            </StyledButton>
            <StyledButton isActive={false} color={planet.name}>
              structure
            </StyledButton>
            <StyledButton isActive={false} color={planet.name}>
              surface
            </StyledButton>
          </StyledSwitchContentButtons>

          <StyledImageWrapper>
            <StyledImage
              planetName={planet.name}
              src={planet.images.overview.url}
            />
          </StyledImageWrapper>

          <StyledDescription>
            <StyledTitle>{planet.name}</StyledTitle>
            <StyledContent>{planet.overview.content}</StyledContent>
            <SourceLink
              sourceName="Wikipedia"
              source={planet.overview.source}
            />
          </StyledDescription>
        </Wrapper>
      ) : null}
    </>
  );
};

export default Planet;
