// import UseFetchHookTest from "../components/use-fetch/UseFetchHookTest";
// import UseOutsideClickTest from "../components/use-outside-click/UseOutsideClickTest";
// import UseWindowResizeTest from "../components/use-window-resize/UseWindowResizeTest";
// import ScrollToBottomAndTop from "../components/scroll-bottom-top/ScrollToBottomAndTop";
// import ScrollToSection from "../components/scroll-bottom-top/ScrollToSection";
// import Weather from "../components/weather-app/components/weather/Weather";

import { Routes, Route } from "react-router-dom";
import Navbar from "../components/food-recepies/components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <h1 className="px-18">APP</h1>
      {/* <UseFetchHookTest /> */}
      {/* <UseOutsideClickTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToBottomAndTop /> */}
      {/* <ScrollToSection /> */}
      {/* <Weather /> */}
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
      </div>
    </div>
  );
}
