import { useState } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  let url = "https://openweathermap.org/city/2643743";

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  async function handleSearch() {}

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Weather
    </div>
  );
};

export default Weather;
