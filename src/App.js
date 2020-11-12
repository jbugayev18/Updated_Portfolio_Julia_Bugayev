import React from "react";
import About from "./components/About";
import AboutIcons from "./components/About_Icons";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";
import TechSkillsList from "./components/TechSkillsList";
import TechSkillsIcons from "./components/TechSkills_Icons";
import ProfilePic from "./components/ProfilePic";
import Introduction from "./components/Introduction";

function App() {
  return (
    <main>
      <div className="wrap">
        <About />
        <ProfilePic />
      </div>
      {/* <Introduction /> */}
      <AboutIcons />
      <TechSkills />
      <TechSkillsIcons />
      <TechSkillsList />
      <Projects />
    </main>
  );
}

export default App;
