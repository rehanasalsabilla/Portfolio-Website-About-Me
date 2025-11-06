import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white">Rehana Putri Salsabilla<span className="text-cyan-300">.</span></h1>
    <ul className="hidden md:flex space-x-8 text-white">
      <li><a href="#home" className="hover:text-cyan-300">Home</a></li>
      <li><a href="#experience" className="hover:text-cyan-300">Experience</a></li>
      <li><a href="#skills" className="hover:text-cyan-300">Skills</a></li>
      <li><a href="#projects" className="hover:text-cyan-300">Projects</a></li>
      <li><a href="#certifications" className="hover:text-cyan-300">Certifications</a></li>
      <li><a href="#cv" className="hover:text-cyan-300">CV</a></li>
      <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
