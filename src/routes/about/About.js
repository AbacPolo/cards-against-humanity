import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About_Container">
      <div className="About_Wrapper">
        <h3>Cards Against Humanity</h3>
        <h4>Personal Project</h4>
        <p>
          This website is a personal project developed by me,{" "}
          <strong>Àbac Polo</strong>, to showcase the{" "}
          <em>Front-End Developer</em> skills learned during the{" "}
          <em><a
            href="https://www.codecademy.com/career-journey/front-end-engineer"
            target="_blank"
            rel="noreferrer"
          >
            Codecademy Front-End Engineer Career Path
          </a></em>{" "}
          studies.
        </p>
        <p>
          The Cards Agains Humanity project uses the fact that <strong>Cards Against
          Humanity®</strong> is distributed under a Creative Commons BY-NC-SA 4.0 license
          to develop a game that allows the player to play all the combinations
          the official cards offer.
        </p>
      </div>
    </div>
  );
}

export default About;
