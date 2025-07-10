import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export const fetchWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
