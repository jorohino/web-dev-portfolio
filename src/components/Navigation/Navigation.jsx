import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__logo">
          <img
            src="/web-dev-portfolio/assets/jh-web-dev__logo_sm.png"
            alt="JRH Web Dev Logo"
          />
        </div>
        <div className="navigation__btn-container">
          <a href="#about">
            <button className="navigation__btn">About</button>
          </a>
          <a href="#projects">
            <button className="navigation__btn">Projects</button>
          </a>
          <a href="#contact">
            <button className="navigation__btn">Contact</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
