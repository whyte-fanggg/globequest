export interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders: string[];
  capital: string[];
}
