// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // path to your router/index.jsx
import "./index.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
