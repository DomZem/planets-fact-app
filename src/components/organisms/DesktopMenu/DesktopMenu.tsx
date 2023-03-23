import { NavLink } from 'react-router-dom';
import { planets } from '../../../constants';
import { NavWrapper, StyledLink } from './DesktopMenu.styles';

const DesktopMenu = () => (
  <NavWrapper>
    {planets.map((name) => (
      <StyledLink as={NavLink} to={`${name}`} color={name} key={name}>
        {name}
      </StyledLink>
    ))}
  </NavWrapper>
);

export default DesktopMenu;
