import styled, { ThemeProvider } from 'styled-components';
import Header from '../../components/organisms/Header/Header';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Planet from '../Planet/Planet';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <StyledMain>
      <Planet />
    </StyledMain>
  </ThemeProvider>
);

const StyledMain = styled.main`
  height: 100vh;
  padding-top: 12rem;

  @media (min-width: 768px) {
    padding-top: 16rem;
  }

  @media (min-width: 1024px) {
    padding-top: 8.6rem;
  }
`;

export default App;
