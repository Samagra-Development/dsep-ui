import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import io from "socket.io-client";
import Home from "./Components/Home";

const socket = io("http://localhost:5003");

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
