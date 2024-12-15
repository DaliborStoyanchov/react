import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className={classes.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
