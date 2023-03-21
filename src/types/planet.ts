export interface planetType {
  name: planetNameType;
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

export type contentNameType = 'overview' | 'structure' | 'surface';

export type planetNameType = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';
