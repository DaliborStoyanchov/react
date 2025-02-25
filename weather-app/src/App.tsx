import Form from "./components/Form";
import axios from "axios";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";

const API_KEY = "651ceb7b7263ff6bcd065c9d935b4cc2";

const initialData = {
  temp: 20.5,
  feels_like: 19.8,
  dt: 1645624400,
  sunrise: 1645605600,
  sunset: 1645646400,
  weather: [
    {
      main: "Clear",
      description: "clear sky",
      icon: "icon",
    },
  ],
};

const App = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentData, setCurrentData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [timezone, setTimezone] = useState("");

  const handleLocationSearch = async (e: any) => {
    e.preventDefault();

    let response = await axios.get(`
      https://api.openweathermap.org/data/3.0/oneca11?lat=${coordinates.latitude}&units=imperial&log=${coordinates.longitude}&appid=${API_KEY}
    `);

    setCurrentData(response.data.current);
    setTimezone(response.data.timezone);
    setLoading(false);
  };

  const handleChange = (e: any) => {
    setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) });
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <h1 className="font-bold mx-auto my-4 text-2xl">Weather App</h1>
      <div className="w-sm mx-auto p-6 bg-white shadow-md rounded-lg ">
        <Form
          onChange={handleChange}
          handleLocationSearch={handleLocationSearch}
        />
      </div>
      {!loading && (
        <>
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Current Weather
            </h2>
            <CurrentWeatherCard weatherData={currentData} timezone={timezone} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
