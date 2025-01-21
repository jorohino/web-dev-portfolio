import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h3 className="contact__title">Contact Me</h3>
      <div className="contact__container">
        <div className="contact__item contact__item_email">
          <p>
            Email me:<br></br> jorohino@gmail.com
          </p>
          <a href="mailto:jorohino@gmail.com">
            <button />
          </a>
        </div>
        <div className="contact__item contact__item_github">
          <p>Check out my GitHub</p>
          <a href="https://github.com/jorohino">
            <button />
          </a>
        </div>
        <div className="contact__item contact__item_linkedin">
          <p>Message me on LinkedIn</p>
          <a href="http://www.linkedin.com/in/joshua-hinostroza/">
            <button />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
