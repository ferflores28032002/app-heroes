import React from "react";
import ReactDOM from "react-dom/client";
import { Heroes } from "./Componentes/Heroes";
import "./Sass/index.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
//Main 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Heroes />
    </BrowserRouter>
  </React.StrictMode>
);
