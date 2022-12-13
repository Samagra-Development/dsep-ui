import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import io from "socket.io-client";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

const socket = io("https://api.dsep.samagra.io");

function App() {

  const [theme, setTheme] = useState("light");

  // detects browser's default darkmode setting
  let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
  let isDarkMode = mediaQueryObj.matches;

  // updates state to dark if default darkmode enabled in browser
  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => curr === "dark" ? "light" : "dark");
  }

  return (
    <Router>
      <div className="App" id={theme}>
        <button onClick={toggleTheme} className={`px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md m-2 hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out absolute`}>{theme} mode</button>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/courses" element={<Courses socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
