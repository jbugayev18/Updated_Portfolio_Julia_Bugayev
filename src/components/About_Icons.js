import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function AboutIcons() {
  return (
    <div className="about-icons">
      <a href="https://www.linkedin.com/in/juliabugayev">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/jbugayev18">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="mailto:jbugayev18@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeOpen} />
      </a>
    </div>
  );
}
