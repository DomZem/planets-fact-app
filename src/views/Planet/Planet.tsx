import styled from 'styled-components';
import { usePlanet } from '../../hooks/usePlanet';
import { type planetNameType } from '../../types/planet';
import {
  StyledButton,
  StyledSwitchContentButtons,
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
        </Wrapper>
      ) : null}
    </>
  );
};

export const StyledImageWrapper = styled.div`
  min-height: 32vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img<{ planetName: planetNameType }>`
  max-width: ${({ theme, planetName }) => theme.planetsMaxSize[planetName]};
`;

export default Planet;
