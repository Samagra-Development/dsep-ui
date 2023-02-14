import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import io from "socket.io-client";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseDetails from './pages/CourseDetails';
import MyCourses from './pages/MyCourses';

const socket = io("https://api.dsep.samagra.io");
// const socket = io("http://localhost:3000");

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
      <div className="App" id={theme} style={{minHeight:'100vh'}}>
        {/* <button onClick={toggleTheme} className={`px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded-r-xl shadow-md mb-4 hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out fixed bottom-0`}> {theme === "dark" ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>} </button> */}
        <Routes>
          <Route path="/" element={<Login socket={socket} />} />
          <Route path="/courses"  element={<Courses mode={theme} socket={socket} />} />
          <Route path="/my_courses"  element={<MyCourses mode={theme} socket={socket} />} />
          <Route path="/courses/:id" element={<CourseDetails mode={theme} socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;