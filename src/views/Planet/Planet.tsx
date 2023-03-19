import styled from 'styled-components';
import SourceLink from '../../components/atoms/SourceLink/SourceLink';
import { usePlanet } from '../../hooks/usePlanet';
import {
  StyledButton,
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
        <>
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
              <p>{planet.overview.content}</p>
              <SourceLink
                sourceName="Wikipedia"
                source={planet.overview.source}
              />
            </StyledDescription>
          </Wrapper>
          <StyledStatistics>
            {planet.statistics.map((stat) => (
              <StyledStat key={stat.title}>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </StyledStat>
            ))}
          </StyledStatistics>
        </>
      ) : null}
    </>
  );
};

export const StyledStatistics = styled.ul`
  margin-top: 2.8rem;

  display: grid;
  gap: 0.8rem;
`;

export const StyledStat = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem 2.4rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  p {
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 200%;

    letter-spacing: 0.727273px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};

    opacity: 0.5;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.antonio};
    font-weight: 400;
    font-size: 2rem;

    letter-spacing: -0.75px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.white};
  }
`;
export default Planet;
