import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses";
import { Toaster } from "react-hot-toast";
const socket = io("https://api.dsep.samagra.io");

function App() {
  const [theme, setTheme] = useState("light");

  // detects browser's default darkmode setting
  let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
  let isDarkMode = mediaQueryObj.matches;

  // updates state to dark if default darkmode enabled in browser
  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
    }
  }, []);

  return (
    <Router>
      <div className="App" id={theme}>
        <Routes>
          <Route path="/" element={<Login socket={socket} />} />
          <Route
            path="/courses"
            element={<Courses mode={theme} socket={socket} />}
          />
          <Route
            path="/my_courses"
            element={<MyCourses mode={theme} socket={socket} />}
          />
          <Route
            path="/courses/:id"
            element={<CourseDetails mode={theme} socket={socket} />}
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
