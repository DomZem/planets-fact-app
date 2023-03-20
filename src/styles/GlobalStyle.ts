import { createGlobalStyle } from 'styled-components';
import { type themeType } from '../types/theme';

export const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
	  background-image: url('../../public/assets/images/background-stars.svg');
    background-color: ${({ theme }) => theme.colors.federalBlue}; 
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  p {
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-size: 1.1rem;
    font-weight: 400;
    
    color: ${({ theme }) => theme.colors.white};
    line-height: 200%;

    @media (min-width: 1024px) {
      font-size: 1.4rem;
      line-height: 179%;
    }
  }
  
  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.antonio};
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
