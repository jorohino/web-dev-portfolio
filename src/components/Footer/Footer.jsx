import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__signature"></div>
        <div className="footer__btn-container">
          <button className="footer__btn">Email</button>
          <button className="footer__btn">GitHub</button>
          <button className="footer__btn">LinkedIn</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
