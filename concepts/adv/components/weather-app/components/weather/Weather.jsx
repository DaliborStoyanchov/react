import { useState } from "react";
import Search from "../search/Search";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
      );

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

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
