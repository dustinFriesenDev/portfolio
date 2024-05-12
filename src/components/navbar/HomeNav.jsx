import React from "react";
import { Outlet, Link } from "react-router-dom";
import './HomeNavStyles.css';

const HomeNav = () => {
  return (
    <>
      {/* <nav> */}
        {/* <ul> */}
          <li>
            <Link to="/"><p className="return-home">Home</p></Link>
          </li>
    
        {/* </ul> */}
      {/* </nav> */}

      <Outlet />
    </>
  )
};

export default HomeNav;