import React from "react"

import type { Weather } from "../types/weather"

interface WeatherCardProps {
  weather: Weather
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md rounded-xl p-8 shadow-md hover:shadow-lg transition transform opacity-0 translate-y-8 animate-fadeSlide">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Weather in {weather.name}
      </h2>
      <p>
        <strong>Temperature:</strong> {weather.main.temp}°C
      </p>
      <p>
        <strong>Description:</strong> {weather.weather[0].description}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="Weather Icon"
        className="w-24 h-24 mt-4 bg-gradient-to-br from-amber-100 to-yellow-600 rounded-full border border-gray-300 shadow-md"
      />
    </div>
  )
}

export default WeatherCard
