import React, { useState } from "react"
import SearchBar from "../components/SearchBar"
import CountryCard from "../components/CountryCard"
import WeatherCard from "../components/WeatherCard"
import Loader from "../components/Loader"
import { fetchCountry } from "../api/countries"
import { fetchWeather } from "../api/weather"
import type { Country } from "../types/country"
import type { Weather } from "../types/weather"

const Dashboard = () => {
  const [countryData, setCountryData] = useState<Country | null>(null)
  const [weatherData, setWeatherData] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (countryName: string) => {
    try {
      setLoading(true)
      const country = await fetchCountry(countryName)
      console.log("Country data:", country)
      setCountryData(country)

      const capital = country.capital[0]
      const weather = await fetchWeather(capital)
      console.log("Weather data:", weather)
      setWeatherData(weather)
    } catch (error) {
      console.error(error)
      setCountryData(null)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Title with emoji logo */}
      <div className="flex items-center justify-center mb-10">
        <span className="text-3xl mr-2">🌐</span>
        <h1 className="text-4xl font-bold text-gray-800">GlobeQuest</h1>
      </div>

      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {countryData && <CountryCard country={countryData} />}
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  )
}

export default Dashboard
