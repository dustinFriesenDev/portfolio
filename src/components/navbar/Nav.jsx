import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavStyles.css";

const Nav = () => {


  return (
    <>
      <div className="main-container">
        <ul className="project-cards">
          <li>
            <Link to="/disney_princess_quiz">
              <figure>
               <img className="home-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1535cece-1e83-418f-b157-56a86c250a55/da3kz1v-7acf7410-3b4b-495d-a5da-4ed020f5ecd9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1MzVjZWNlLTFlODMtNDE4Zi1iMTU3LTU2YTg2YzI1MGE1NVwvZGEza3oxdi03YWNmNzQxMC0zYjRiLTQ5NWQtYTVkYS00ZWQwMjBmNWVjZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C1faoLLPpJbMYz77WBnzAJLTUqJrxaMY899MeHu46AI" alt="disney princess in a strong pose."/>
               <figcaption>Disney Princess Quiz</figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link className="card" to="/superheroes_quiz">
            <figure>
               <img className="home-img" src="https://i.pinimg.com/736x/2e/7a/bc/2e7abcd94b8364be75ad0903b76fda06.jpg" alt="JLA and Marvel heroes standing in a strong pose."/>
                <figcaption>Superhero Quiz</figcaption>
              </figure>
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Nav;