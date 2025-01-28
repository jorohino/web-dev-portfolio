import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__section">
        <h3 className="about__title">About Me</h3>
        <p className="about__text">
          The transition from a career in education to software engineering has
          been one of the most challenging yet rewarding experiences of my life.
          My background in academia and as a high school history teacher have
          shaped my ability to understand complex systems, communicate
          effectively, and create accessible, engaging materials -- all of which
          now guide my approach to development. As a full-stack web developer, I
          bring a foundation in HTML/CSS, React.js, Node.js and Express.js,
          paired with a commitment to lifelong learning and self-improvement.
          I'm excited to continue growing and contributing to projects that make
          technology approachable and impactful for all users.
        </p>
      </div>
      <div className="about__section">
        <h3 className="about__title">Tech Stack</h3>
        <ul className="about__text about__list">
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/html.svg`}
            />
            <p>HTML</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/css.svg`}
            />
            <p>CSS</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/javascript.svg`}
            />
            <p>JavaScript</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/react.svg`}
            />
            <p>React.js</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/node.svg`}
            />
            <p>Node.js</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/express.svg`}
            />
            <p>Express.js</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/mongodb.svg`}
            />
            <p>MongoDB</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/git.svg`}
            />
            <p>Git</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/github.svg`}
            />
            <p>GitHub</p>
          </li>
          <li className="about__list-item">
            <img
              className="about__list-img"
              src={`${import.meta.env.BASE_URL}assets/gcp.svg`}
            />
            <p>Google Cloud Platform</p>
          </li>
        </ul>
        <div className="about__section-footer">
          <p className="about__text">In Development: TypeScript, SQL, AWS</p>
        </div>
      </div>
    </section>
  );
}

export default About;
