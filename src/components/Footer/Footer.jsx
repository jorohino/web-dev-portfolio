import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__signature" aria-label="Joshua Hinostroza" />
        <a href="#header">
          <button className="footer__top-btn">Back to top</button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
