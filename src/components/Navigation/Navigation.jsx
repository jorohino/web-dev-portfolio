import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__logo">
          <img src="/assets/jh-web-dev__logo_sm.png" alt="JRH Web Dev Logo" />
        </div>
        <div className="navigation__btn-container">
          <button className="navigation__btn">About</button>
          <button className="navigation__btn">Projects</button>
          <button className="navigation__btn">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
