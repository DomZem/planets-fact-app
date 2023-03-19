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
    mercury: '33.945%',
    venus: '47.095%',
    earth: '52.909%',
    mars: '39.45%',
    jupiter: '68.505%',
    saturn: '78.29%',
    uranus: '53.823%',
    neptune: '52.906%',
  },
};
