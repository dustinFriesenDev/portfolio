import React from "react";
import { Outlet, Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><h1>Home</h1></Link>
          </li>
    
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default HomeNav;