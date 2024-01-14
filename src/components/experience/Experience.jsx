import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* ===========  FRONTEND  ========== */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS/SCSS</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>GIT</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>
          </div>
        </div>

        {/* ===========  BACKEND  ========== */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Beginner </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Beginner </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Beginner </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
