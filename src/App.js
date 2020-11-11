import React from "react";
import About from "./components/About";
import AboutIcons from "./components/About_Icons";
import Header from "./components/Header/Header";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";
import TechSkillsList from "./components/TechSkillsList";
import TechSkillsIcons from "./components/TechSkills_Icons";

function App() {
  return (
    <>
      <main>
        <Header />
        <About />
        <AboutIcons />
        <TechSkills />
        <TechSkillsIcons />
        <TechSkillsList />
        <Projects />
      </main>
    </>
  );
}

export default App;
