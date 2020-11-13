import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DonationHub from "../Photos/donation_hub.png";
import LetsGetEducated from "../Photos/tutor_app.png";
import TentarePhoneScreenshot from "../Photos/tentare.png";

export default function Projects() {
  return (
    <main className="project-header">
      <h1>Projects</h1>

      <div className="all-projects">
        <div className="project">
          <h3>Let's Get Educated!</h3>
          <img
            className="screenshots"
            src={LetsGetEducated}
            alt="Let's Get Educated"
          />
          <a href="https://tutor-app.jbugayev18.vercel.app/">
            <FontAwesomeIcon icon={faShareAlt} className="project-icon" /> Live
            App
          </a>

          <a href="https://github.com/jbugayev18/TutorApp-">
            <FontAwesomeIcon icon={faGithubAlt} className="project-icon" />{" "}
            GitHub Client
          </a>

          <a href="https://capstone-tutorserver.herokuapp.com/">
            <FontAwesomeIcon icon={faGithubAlt} className="project-icon" />{" "}
            GitHub Server
          </a>

          <p>
            {" "}
            "Let's Get Educated!" is an application that allows users to find a
            tutor catered to selected zipcodes provided from the application.
            The application also provides school subject material that the user
            is interested in utilizing.
          </p>

          <p>FrontEnd: JavaScript, React, CSS3, HTML5, and Jest</p>
          <p>Backend: Node.js, Express, RESTful APIs</p>
        </div>

        <div className="project">
          <h3>Tentare</h3>
          <img
            className="screenshots"
            src={TentarePhoneScreenshot}
            alt="Tentare Phone Screenshot"
          />
          <a href="https://tentare-client.vercel.app/register">
            <FontAwesomeIcon icon={faShareAlt} /> Live App
          </a>

          <a href="https://github.com/jbugayev18/Tentare-Client">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Client
          </a>

          <a href="https://github.com/lipcowan/Tentare-Api">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Server
          </a>

          <p>
            {" "}
            "Tentare", Italian for "To Try" is a spaced repetition application
            that allows users to have the ability to learn Italian by reviewing
            material at gradual increasing intervals.Developed by Julia Bugayev
            and Philip Cowan.
          </p>

          <p>FrontEnd: JavaScript, React, CSS3, HTML5, and Jest</p>
          <p>
            Backend: Node.js, Express, RESTful APIs,Bcyrpt,PostgreSQL, Cypress
          </p>
        </div>

        <div className="project">
          <h3>DonationHub</h3>
          <img
            className="screenshots"
            src={DonationHub}
            alt="DonationHub Homepage Screenshot"
          />
          <a href="https://donation-hub-client.vercel.app/">
            <FontAwesomeIcon icon={faShareAlt} /> Live App
          </a>

          <a href="https://github.com/kayleighkat98/donation-hub-client">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Client
          </a>

          <a href="https://github.com/jbugayev18/DonationHub-API">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Server
          </a>

          <p>
            {" "}
            "DonationHub" allows users to locate donation organization near
            them, browse items that the donation center needs, and donate as
            they please accordingly. Users are also able to add donation sites
            for organizations that may not be as internet accessible.
          </p>

          <p>FrontEnd: JavaScript, React, CSS3, HTML5, Jest, JSON Web Token</p>
          <p>
            Backend: Node.js, Express,Bcyrpt,PostgreSQL, Mocha/Chai, GIST Index
            for performant box intersection query, Third Party APIs (Google
            Maps, Google Places)
          </p>
        </div>
      </div>
    </main>
  );
}
