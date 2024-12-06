import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
import MyNav from "./components/MyNav";
import Moon from "./components/Moon";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="header">
          <MyNav />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                <Weather />
              </div>
            }
          />
          <Route path="/moon" element={<Moon />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
