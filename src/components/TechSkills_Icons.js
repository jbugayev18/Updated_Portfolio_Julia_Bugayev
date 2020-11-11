import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function TechSkillsIcons() {
  return (
    <div className="tech-icons">
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faNodeJs} />
      <FontAwesomeIcon icon={faDatabase} />
    </div>
  );
}
