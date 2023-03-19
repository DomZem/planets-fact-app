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
  padding: 12rem 2.4rem 4.7rem 2.4rem;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    padding-top: 16rem;
  }

  @media (min-width: 1024px) {
    padding-top: 8.6rem;
  }
`;

export default App;
