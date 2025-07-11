// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import GlobalState from "../components/food-recepies/context/index.jsx";
// import { Provider } from "react-redux";
// import store from "../components/e-commerce/store/store.js";

// import GlobalState from "../components/expences-tracker/context/context.jsx";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  // <BrowserRouter>
  // <GlobalState>

  <React.StrictMode>
    <App />
  </React.StrictMode>

  // </GlobalState>
  // </BrowserRouter>
  // </Provider>
);
