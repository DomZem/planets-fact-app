import { createGlobalStyle } from 'styled-components';
import { type ThemeType } from '../types/theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
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
    background-color: ${({ theme }) => theme.colors.federalBlue}; 
    background-image: url('./background-stars.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  p {
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-weight: 400;
    font-size: 1.1rem;
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
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;

    font-family: ${({ theme }) => theme.fonts.spartan};
    font-weight: 700;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 2px;
    
    cursor: pointer;
  }
`;
