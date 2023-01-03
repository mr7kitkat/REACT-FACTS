import React from "react";
import reactlogo from "../images/react.svg";

export default function () {
  return (
    <nav className="header r-flex a-center">
      <div className="logo r-flex a-center">
        <img src={reactlogo} alt="" />
        <p className="logoText">ReactFacts</p>
      </div>

      <div className="toggleBar r-flex a-center">
        <span className="light">Light</span>
        <label className="switch">
          <input type="checkbox" name="toggleBtn" />
          <span className="slider"></span>
        </label>
        <span className="dark">Dark</span>
      </div>
    </nav>
  );
}
