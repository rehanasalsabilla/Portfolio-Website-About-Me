import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CVSection from "./components/CVSection";
import Footer from "./components/Footer";
import Education from "./components/Education";
import WhyMe from "./components/WhyMe";

function App() {
  return (
    <div className="bg-[#FAF8F3]">
      <Navbar />

      <Hero />

      <Education />

      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <WhyMe />

      <CVSection />

      <Footer />
    </div>
  );
}

export default App;
