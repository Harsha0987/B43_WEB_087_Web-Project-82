import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import "./styles/global.css";
import "./app.css";
import "./styles/components.css";
import "./styles/pages.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
