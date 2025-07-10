import React from "react"
import type { Country } from "../types/country"

interface CountryCardProps {
  country: Country
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md rounded-xl p-8 shadow-md hover:shadow-lg transition transform opacity-0 translate-y-8 animate-fadeSlide">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {country.name.common}
      </h2>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="w-20 mb-4"
      />
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Languages:</strong>{" "}
        {Object.values(country.languages).join(", ")}
      </p>
      <p>
        <strong>Currencies:</strong>{" "}
        {Object.values(country.currencies)
          .map((c) => `${c.name} (${c.symbol})`)
          .join(", ")}
      </p>
      <p>
        <strong>Borders:</strong>{" "}
        {country.borders ? country.borders.join(", ") : "None"}
      </p>
    </div>
  )
}

export default CountryCard
