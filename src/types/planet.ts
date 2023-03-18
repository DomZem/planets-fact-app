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
  geology: {
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
    geology: { url: string };
  };
}

export type contentNameType = 'overview' | 'structure' | 'geology';

export type planetNameType =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune';
