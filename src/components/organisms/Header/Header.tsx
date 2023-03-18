import { useState } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Divider } from '../../atoms/Divider/Divider';
import ToggleButton from '../../atoms/ToggleButton/ToggleButton';
import DesktopMenu from '../../molecules/DesktopMenu/DesktopMenu';
import { StyledTitle, Wrapper } from './Header.styles';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isBrakepoint = useMediaQuery(767);

  const handleToggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <Wrapper>
      <StyledTitle>the planets</StyledTitle>

      {isBrakepoint ? (
        <ToggleButton isOpen={isOpenMenu} onClick={handleToggleMenu} />
      ) : (
        <DesktopMenu />
      )}

      <Divider />
    </Wrapper>
  );
};

export default Header;
