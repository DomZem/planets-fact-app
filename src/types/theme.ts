import { type planetNameType } from './planet';

export interface themeType {
  colors: Record<colorType, string>;
  fonts: {
    antonio: string;
    spartan: string;
  };
  planetsMaxSize: {
    mobile: Record<planetNameType, string>;
    tablet: Record<planetNameType, string>;
    desktop: Record<planetNameType, string>;
  };
}

export type primaryColorType = 'federalBlue' | 'slightGray' | 'white' | 'darkGray';

export type colorType = primaryColorType | planetNameType;
