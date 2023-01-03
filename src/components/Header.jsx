import React from "react";
import reactlogo from "../images/react.svg";

export default function () {
  const [state, setState] = React.useState(false);

  function toggle() {
    setState((prevState) => !prevState);
  }

  React.useEffect(() => {
    if (state) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  });

  return (
    <nav className="header r-flex a-center">
      <div className="logo r-flex a-center">
        <img src={reactlogo} alt="" />
        <p className="logoText">ReactFacts</p>
      </div>

      <div className="toggleBar r-flex a-center">
        <span className="light">Light</span>
        <label className="switch" onChange={toggle}>
          <input type="checkbox" name="toggleBtn" />
          <span className="slider"></span>
        </label>
        <span className="dark">Dark</span>
      </div>
    </nav>
  );
}
