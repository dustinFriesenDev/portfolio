import React from "react";
import "./Disney";
import superhero from "./Superheroes";
import { Link } from "react-router-dom";
import Disney from "./Disney.js";

function Home() {
    return (
    <>
      <h1>HOME PAGE</h1>
      <Link to={{pathname: './components/disney.js'}}>Disney Princess Quiz</Link>
      <a href={superhero}>Superheroes Quiz</a>
    </>
    );
  }
  export default Home;