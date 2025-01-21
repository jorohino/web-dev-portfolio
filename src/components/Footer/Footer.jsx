import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__signature" aria-label="Joshua Hinostroza" />
        <div className="footer__btn-container">
          <a href="mailto:jorohino@gmail.com">
            <button
              className="footer__btn footer__btn_email"
              aria-label="Email"
            />
          </a>
          <a href="https://github.com/jorohino">
            <button
              className="footer__btn footer__btn_github"
              aria-label="Github"
            />
          </a>
          <a href="http://www.linkedin.com/in/joshua-hinostroza">
            <button
              className="footer__btn footer__btn_linkedin"
              aria-label="LinkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
