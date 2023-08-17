import React from "react";
import Employee from "./Employee";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container container">
        <h2 className="about-title">Nasi specjaliści</h2>
        <Employee />
      </div>
    </section>
  );
};

export default About;
