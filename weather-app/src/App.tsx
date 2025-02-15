import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  function handleChange(e: any) {
    setCoordinates({ ...coordinates, [e.target.name]: Number(e.target.value) });
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <h1 className="font-bold mx-auto my-4 text-2xl">Weather App</h1>
      <div className="w-sm mx-auto p-6 bg-white shadow-md rounded-lg ">
        <Form onChange={handleChange} />
      </div>
    </div>
  );
};

export default App;
