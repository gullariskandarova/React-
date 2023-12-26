import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <h1>Floral Studio</h1>
            </div>
              <nav>
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
