import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./components/Home";
import Disney from "./components/disney-princesses/Disney";
import Superheroes from "./components/superheroes/Superheroes";
import './App.css';

function App() {
  return (
    <main>
    <Router>
    
      <Routes>
        <Route exact path="/" element={<Nav />} />
        <Route index element={<Home />} />
        <Route path="/disney_princess_quiz" element={<Disney />} />
        <Route path="/superheroes_quiz" element={<Superheroes />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
