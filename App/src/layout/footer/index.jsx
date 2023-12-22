import React from "react";
import Button from "../../components/button";
import "./index.scss"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <h1>This is Footer</h1>
            <Button btnText={"FooterButton"}/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
