import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import io from "socket.io-client";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

const socket = io("http://localhost:5003");

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/courses" element={<Courses socket={socket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
