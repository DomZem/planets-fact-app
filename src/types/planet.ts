export interface PlanetType {
  name: PlanetNameType;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  surface: {
    content: string;
    source: string;
  };
  statistics: Array<{
    title: string;
    value: string;
  }>;
  images: {
    overview: { url: string };
    structure: { url: string };
    surface: { url: string };
  };
}

export type ContentNameType = 'overview' | 'structure' | 'surface';

export type PlanetNameType = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';
