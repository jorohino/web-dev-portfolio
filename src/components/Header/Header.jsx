import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <h1 className="header__intro">Hello! I'm...</h1>
      <div className="header__container">
        <div className="header__author-info">
          <h2 className="header__name">
            Joshua <br></br> Hinostroza
          </h2>
          <h2 className="header__role">Web Developer</h2>
          <p className="header__skills">
            React.js | Node.js | Express.js | TypeScript
          </p>
          <p className="header__description">Located in: Central Connecticut</p>
          <a href="/assets/resume.pdf">
            <p className="header__skills">[ Download resume ]</p>
          </a>
        </div>
        <img
          className="header__image"
          src="/assets/author.jpg"
          alt="Image of Joshua Hinostroza"
        />
      </div>
    </header>
  );
}

export default Header;
