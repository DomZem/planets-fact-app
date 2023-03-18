import { useState } from 'react';
import { Divider } from '../../atoms/Divider/Divider';
import ToggleButton from '../../atoms/ToggleButton/ToggleButton';
import { StyledTitle, Wrapper } from './Header.styles';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <Wrapper>
      <StyledTitle>the planets</StyledTitle>
      <ToggleButton isOpen={isOpenMenu} onClick={handleToggleMenu} />
      <Divider />
    </Wrapper>
  );
};

export default Header;
