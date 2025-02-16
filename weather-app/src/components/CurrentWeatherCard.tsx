type CurrentWeatherCardProps = {
  weatherData: {
    temp: number;
    feels_like: number;
    dt: number;
    sunrise: number;
    sunset: number;
  };
};

const CurrentWeatherCard = ({ weatherData }: CurrentWeatherCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="font-semibold">Current Weather Information</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Current Date: </span>
            <span>{weatherData.dt}</span>
          </li>
          <li className="flex justify-between">
            <span>Current Time: </span>
            <span>{weatherData.dt}</span>
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
            <span>{weatherData.sunrise}</span>
          </li>
          <li className="flex justify-between">
            <span>Sunset: </span>
            <span>{weatherData.sunset}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
