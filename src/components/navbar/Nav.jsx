import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavStyles.css";

const Nav = () => {
  return (
    <>
      <div className="main-container">
        <div className="instructions">
          <p>Select a quiz below and test your knowledge.</p>
          <small>**These quizzes were created for a five year old** </small>
        </div>
        <div className="project-cards">
          <li>
            <Link to="/disney_princess_quiz">
              <figure>
               <img className="home-img" src="https://external-preview.redd.it/75SYx7gXSb50vPHp69Yvpu893Uc89NQp0JALKZv4gIk.jpg?auto=webp&s=54e756eb94082821d47a1ea65be29ea0fac7f219" alt="disney princess in a strong pose."/>
               <figcaption>Disney Princess Quiz</figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link className="card" to="/superheroes_quiz">
            <figure>
               <img className="home-img" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/The-15-Best-Marvel-DC-Crossovers-Of-All-Time-Ranked.jpg" alt="JLA and Marvel heroes standing in a strong pose."/>
                <figcaption>Superhero Quiz</figcaption>
              </figure>
            </Link>
          </li>
        </div>
      </div>

      <Outlet />
    </>
  )
};

export default Nav;