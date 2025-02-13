import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-blue-300 to-white">
      <h1 className="font-bold mx-auto my-4 text-2xl">Weather App</h1>
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <Form />
      </div>
    </div>
  );
};

export default App;
