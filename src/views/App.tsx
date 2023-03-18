import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <p>hello there!</p>
  </ThemeProvider>
);

export default App;
