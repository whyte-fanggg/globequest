export interface Weather {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string; // city name
}
