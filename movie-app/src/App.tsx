import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className={classes.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
