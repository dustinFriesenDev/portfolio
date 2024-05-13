import React from "react";
import { Outlet, Link } from "react-router-dom";
import './HomeNavStyles.css';

const HomeNav = () => {
  return (
    <>
      <li>
        <Link to="/"><p className="return-home">Home</p></Link>
      </li>
      <Outlet />
    </>
  )
};

export default HomeNav;