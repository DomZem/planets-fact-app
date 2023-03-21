import { type FC } from 'react';
import Header from '../../organisms/Header/Header';
import { StyledMain } from './MainTemplate.styles';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => (
  <>
    <Header />
    <StyledMain>{children}</StyledMain>
  </>
);

export default MainTemplate;
