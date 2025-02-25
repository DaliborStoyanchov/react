import { useEffect, useState } from "react";

type Weather = {
  main: string;
  description: string;
  icon: string;
};

type CurrentWeatherCardProps = {
  weatherData: {
    temp: number;
    feels_like: number;
    dt: number;
    sunrise: number;
    sunset: number;
    weather: Weather[];
  };
  timezone: string;
};

const CurrentWeatherCard = ({
  weatherData,
  timezone,
}: CurrentWeatherCardProps) => {
  const [times, setTimes] = useState({
    currentDate: "",
    currentTime: "",
    sunriseTime: "",
    sunsetTime: "",
  });

  useEffect(() => {
    let currentDateObject = new Date(weatherData.dt * 1000);
    let currentSunriseDateObject = new Date(weatherData.sunrise * 1000);
    let currentSunsetDateObject = new Date(weatherData.sunset * 1000);

    let currentDateString = currentDateObject.toString();
    let currentSunriseDateString = currentSunriseDateObject.toString();
    let currentSunsetDateString = currentSunsetDateObject.toString();

    let currentTime = currentDateString.substring(16, 24);
    let currentDate =
      currentDateString.substring(0, 3) +
      ", " +
      currentDateString.substring(4, 15);

    let sunriseTime = currentSunriseDateString.substring(16, 24);
    let sunsetTime = currentSunsetDateString.substring(16, 24);

    setTimes({
      ...times,
      currentDate,
      currentTime,
      sunriseTime,
      sunsetTime,
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="font-semibold">Current Weather Information</h2>
      </div>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 rounded-full p-2">
            <img
              className="w-20 h-2"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <p className="text-xl font-medium text-gray-700">
            {weatherData.weather[0].main}
          </p>
          <p className=" text-gray-500 capitalize">
            {weatherData.weather[0].description}
          </p>
          <p className=" text-gray-500">{timezone}</p>
        </div>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Current Date: </span>
            <span>{times.currentDate}</span>
          </li>
          <li className="flex justify-between">
            <span>Current Time: </span>
            <span>{times.currentTime}</span>
          </li>
          <li className="flex justify-between">
            <span>Temperature: </span>
            <span>{Math.round(weatherData.temp)}°F</span>
          </li>
          <li className="flex justify-between">
            <span>Feels Like: </span>
            <span>{Math.round(weatherData.feels_like)}°F</span>
          </li>
          <li className="flex justify-between">
            <span>Sunrise: </span>
            <span>{times.sunriseTime}</span>
          </li>
          <li className="flex justify-between">
            <span>Sunset: </span>
            <span>{times.sunsetTime}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
