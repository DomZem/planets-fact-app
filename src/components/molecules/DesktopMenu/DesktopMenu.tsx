import { planets } from '../../../constants';
import { StyledLink, Wrapper } from './DesktopMenu.styles';

const DesktopMenu = () => (
  <Wrapper>
    {planets.map((name) => (
      <StyledLink to={`${name}`} nameColor={name} key={name}>
        {name}
      </StyledLink>
    ))}
  </Wrapper>
);

export default DesktopMenu;
