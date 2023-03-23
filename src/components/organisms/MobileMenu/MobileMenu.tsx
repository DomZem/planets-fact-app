import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { planets } from '../../../constants';
import ToggleButton from '../../atoms/ToggleButton/ToggleButton';
import { NavWrapper, StyledLink, StyledPlanetIcon } from './MobileMenu.styles';

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <ToggleButton isOpen={isOpenMenu} onClick={handleToggleMenu} />
      <NavWrapper isMenuOpen={isOpenMenu}>
        {planets.map((name) => (
          <StyledLink key={name} to={`${name}`}>
            <StyledPlanetIcon color={name} />
            {name}
            <BiChevronRight />
          </StyledLink>
        ))}
      </NavWrapper>
    </>
  );
};

export default MobileMenu;
