import { useEffect, useState } from "react";
import Search from "../search/Search";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
      );

      const data = await res.json();

      console.log(data);

      if (data) {
        setIsLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {isLoading && <h3>Loading...</h3>}
      {weatherData ? <p>{weatherData.name}</p> : <p>Enter City Name</p>}
    </div>
  );
};

export default Weather;
