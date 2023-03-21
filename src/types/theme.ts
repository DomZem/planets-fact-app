import { type planetNameType } from './planet';

export interface themeType {
  colors: Record<nameColorType, string>;
  fonts: {
    antonio: string;
    spartan: string;
  };
  planetsMaxSize: {
    mobile: Record<planetNameType, string>;
    tablet: Record<planetNameType, string>;
  };
}

export type primaryNameCOlorType = 'federalBlue' | 'slightGray' | 'white' | 'darkGray';

export type nameColorType = primaryNameCOlorType | planetNameType;
