import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export default function AboutIcons() {
  return (
    <div className="about-icons">
      <Router>
        <Route>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/juliabugayev" }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            to={{ pathname: "https://github.com/jbugayev18" }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <a href="mailto:jbugayev18@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </a>
        </Route>
      </Router>
    </div>
  );
}
