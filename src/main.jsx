import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
