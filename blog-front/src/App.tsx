import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { AuthProvider } from "./context/Authcontext"
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { Routes } from "./routes";
import Home from "./routes/Home";
const location = new ReactLocation();

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
