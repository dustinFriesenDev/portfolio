import React from "react";
import { Outlet, Link } from "react-router-dom";
import './HomeNavStyles.css';

const HomeNav = () => {
  return (
    <>
      <li>
        <Link to="/"><p className="return-home">{'\u21E6'} Back</p></Link>
      </li>
      <Outlet />
    </>
  )
};

export default HomeNav;