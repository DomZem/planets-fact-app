import { useMediaQuery } from '../../../hooks/useMediaQuery';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { HeaderWrapper, StyledTitle } from './Header.styles';

const Header = () => {
  const isBrakepoint = useMediaQuery(767);

  return (
    <HeaderWrapper>
      <StyledTitle>the planets</StyledTitle>
      {isBrakepoint ? <MobileMenu /> : <DesktopMenu />}
    </HeaderWrapper>
  );
};

export default Header;
