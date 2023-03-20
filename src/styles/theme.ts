import { type themeType } from '../types/theme';

export const theme: themeType = {
  colors: {
    federalBlue: '#070724', // background
    slightGray: '#5C677D', // paragraphs, button text, border, links
    white: '#FFFFFF', // headers, active links
    darkGray: '#38384F', // desktop button background on hover

    // planets
    mercury: '#419EBB',
    venus: '#EDA249',
    earth: '#6F2ED6',
    mars: '#D14C32',
    jupiter: '#D83A34',
    saturn: '#CD5120',
    uranus: '#1EC2A4',
    neptune: '#2D68F0',
  },
  fonts: {
    spartan: 'Spartan, sans-serif',
    antonio: 'Antonio, sans-serif',
  },
  // Every planet have different max size because that mirrors its size in the solar system
  planetsMaxSize: {
    mobile: {
      mercury: '11.1rem',
      venus: '15.4rem',
      earth: '17.3rem',
      mars: '12.9rem',
      jupiter: '22.4rem',
      saturn: '25.6rem',
      uranus: '17.6rem',
      neptune: '17.3rem',
    },
    tablet: {
      mercury: '18.4rem',
      venus: '25.3rem',
      earth: '28.5rem',
      mars: '21.3rem',
      jupiter: '36.9rem',
      saturn: '37.2rem',
      uranus: '29rem',
      neptune: '28.5rem',
    },
  },
};
