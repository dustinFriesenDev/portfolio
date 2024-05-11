import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/Home.js";
import Disney from "./components/Disney.js";
import Superheroes from "./components/Superheroes.js";
import './App.css';

function App() {
  return (
    <main>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/disney_princess_quiz" element={<Disney />} />
        <Route path="/superheroes_quiz" element={<Superheroes />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
