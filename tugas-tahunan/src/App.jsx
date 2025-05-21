import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // <-- huruf besar!
import Dashboard from "./Dashboard";
import Achievement from "./Achievement";
import Proyek from "./Proyek";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Achievement" element={<Achievement />} />
        <Route path="/Proyek" element={<Proyek />} />
      </Routes>
    </Router>
  );
}

export default App;
