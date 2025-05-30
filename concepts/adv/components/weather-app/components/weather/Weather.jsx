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
      {error && <p>Error occurred. Try again later. ERROR: {error}</p>}
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className={classes.container}>
          <div className={classes.cityName}>
            <h2>
              {weatherData?.name + ","} <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className={classes.date}>
            <span>{getCurrentDate()}</span>
          </div>
          <div className={classes.temp}>
            {Math.round(weatherData?.main?.temp - 270)} <sup>o</sup>C{" "}
          </div>
          <p className={classes.description}>
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className={classes.weatherInfo}>
            <div>
              <div>
                <p className={classes.wind}>{weatherData?.wind?.speed} m/h</p>
                <p>Wind Speed</p>
              </div>
              <div>
                <p className={classes.humidity}>
                  {weatherData?.main?.humidity + "%"}
                </p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
