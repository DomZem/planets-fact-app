import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { planets } from '../../../constants';
import ToggleButton from '../../atoms/ToggleButton/ToggleButton';
import { StyledLink, StyledPlanetIcon, Wrapper } from './MobileMenu.styles';

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <ToggleButton isOpen={isOpenMenu} onClick={handleToggleMenu} />
      <Wrapper isMenuOpen={isOpenMenu}>
        {planets.map((name) => (
          <StyledLink key={name} to={`${name}`}>
            <StyledPlanetIcon planetName={name} />
            {name}
            <BiChevronRight />
          </StyledLink>
        ))}
      </Wrapper>
    </>
  );
};

export default MobileMenu;
