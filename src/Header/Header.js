import React from "react";
import "./Header.css";

function header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
          alt="Facebook Logo"
        />
      </div>
      "<div className="header__middle"></div>
      <div className="header__right"></div>
      <h1>bhwfb</h1>
    </div>
  );
}

export default header;
