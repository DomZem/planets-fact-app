import { useMediaQuery } from '../../../hooks/useMediaQuery';
import DesktopMenu from '../../molecules/DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { StyledTitle, Wrapper } from './Header.styles';

const Header = () => {
  const isBrakepoint = useMediaQuery(767);

  return (
    <Wrapper>
      <StyledTitle>the planets</StyledTitle>
      {isBrakepoint ? <MobileMenu /> : <DesktopMenu />}
    </Wrapper>
  );
};

export default Header;
