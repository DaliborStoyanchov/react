import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
