import styled from 'styled-components';
import { Divider } from '../../components/atoms/Divider/Divider';
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
            <StyledButton isActive={true} nameColor={planet.name}>
              overview
            </StyledButton>
            <StyledButton isActive={false} nameColor={planet.name}>
              structure
            </StyledButton>
            <StyledButton isActive={false} nameColor={planet.name}>
              surface
            </StyledButton>
            <Divider />
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
