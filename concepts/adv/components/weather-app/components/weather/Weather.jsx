import { useEffect, useState } from "react";
import Search from "../search/Search";

import classes from "./Weather.module.css";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [search, setSearch] = useState("Skopje");
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

  function getCurrentDate() {
    return new Date().toLocaleString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("skopje");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {error && <p>{error}</p>}
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <div className={classes.cityName}>
            <h3>
              {weatherData?.name + ","} <span>{weatherData?.sys?.country}</span>
            </h3>
          </div>
          <div className={classes.date}>
            <span>{getCurrentDate()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
