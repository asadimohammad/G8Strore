import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainLayouts from "./components/MainLayouts";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainLayouts />
  </BrowserRouter>
);
