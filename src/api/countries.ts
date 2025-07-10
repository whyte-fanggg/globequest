import axios from 'axios';

export const fetchCountry = async (countryName: string) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  return response.data[0];
};
