import { ThemeProvider } from 'styled-components';
import Header from '../components/organisms/Header/Header';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);

export default App;
