import Form from "./components/Form";
import axios from "axios";
import { useState } from "react";
import CurrentWeatherCard from "./components/CurrentWeatherCard";

const API_KEY = "651ceb7b7263ff6bcd065c9d935b4cc2";

const App = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentData, setCurrentData] = useState({});
  const [hourlyData, setHourlyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLocationSearch = async (e: any) => {
    e.preventDefault();

    let response = await axios.get(`
      https://api.openweathermap.org/data/3.0/oneca11?lat=${coordinates.latitude}&units=imperial&log=${coordinates.longitude}&appid=${API_KEY}
    `);

    setCurrentData(response.data.current);
    setHourlyData(response.data.hourly);
    setDailyData(response.data.daily);
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
      {/* {!loading && <CurrentWeatherCard weatherData={currentData} />} */}
      <CurrentWeatherCard weatherData={currentData} />
    </div>
  );
};

export default App;
