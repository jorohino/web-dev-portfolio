import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h3 className="projects__title">Projects</h3>
        <ul className="projects__list">
          <li className="projects__card projects__card_vmrt">
            <div className="projects__card-info">
              <h4>VetMed Reaction Tracker</h4>
              <p>A veterinary tool leveraging openFDA API.</p>
            </div>
          </li>
          <li className="projects__card projects__card_wtwr">
            <div className="projects__card-info">
              <h4>WTWR - What to Wear</h4>
              <p>A weather-based wardrobe planner.</p>
            </div>
          </li>
          <li className="projects__card projects__card_atus">
            <div className="projects__card-info">
              <h4>Around the U.S.</h4>
              <p>A travel photo-sharing platform.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
