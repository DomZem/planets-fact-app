import { type FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppProviders;
