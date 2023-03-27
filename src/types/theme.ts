import { type PlanetNameType } from './planet';

export interface ThemeType {
  colors: Record<ColorType, string>;
  fonts: {
    antonio: string;
    spartan: string;
  };
  planetsMaxSize: {
    mobile: Record<PlanetNameType, string>;
    tablet: Record<PlanetNameType, string>;
    desktop: Record<PlanetNameType, string>;
  };
}

export type PrimaryColorType = 'federalBlue' | 'slightGray' | 'white' | 'darkGray';

export type ColorType = PrimaryColorType | PlanetNameType;
