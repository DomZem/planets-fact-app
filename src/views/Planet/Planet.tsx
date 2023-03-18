import { Divider } from '../../components/atoms/Divider/Divider';
import { usePlanet } from '../../hooks/usePlanet';
import {
  StyledButton,
  StyledSwitchContentButtons,
  Wrapper,
} from './Planet.styles';

const Planet = () => {
  const { planet, error } = usePlanet();

  return (
    <Wrapper>
      <StyledSwitchContentButtons>
        {!error && planet !== null ? (
          <>
            <StyledButton isActive={true} nameColor={planet.name}>
              overview
            </StyledButton>
            <StyledButton isActive={false} nameColor={planet.name}>
              structure
            </StyledButton>
            <StyledButton isActive={false} nameColor={planet.name}>
              surface
            </StyledButton>
          </>
        ) : null}
        <Divider />
      </StyledSwitchContentButtons>
    </Wrapper>
  );
};

export default Planet;
