import React from "react";
import Button from "../../components/button";
import "./index.scss"
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1>This is Header</h1>
            <Button btnText={"Header Button"}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
