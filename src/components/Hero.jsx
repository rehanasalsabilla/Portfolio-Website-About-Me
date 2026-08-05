import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import fotoDiri from "../assets/foto-profile.jpeg";
import cvRehana from "../assets/cv_rehana.pdf";


const stats = [
  {
    value: "2",
    label: "Internships",
  },
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "5+",
    label: "Certifications",
  },
];  

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 pt-28 pb-20 
      bg-linear-to-br from-cyan-800 via-gray-900 to-[#162d64] text-white"
    >
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left"
      >

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm mb-5">
          👋 Available for Internship & Entry-Level Opportunities
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I’m <span className="text-cyan-300">Rehana</span> 👋
        </h1>

        <p className="text-gray-400 mt-2">
        📍 Surabaya, Indonesia
        </p>

        {/* HEADLINE */}
        <p className="text-lg md:text-xl text-gray-200 mb-4">
          Data Analyst & Software Developer. Passionate about building data-driven applications and transforming complex data into actionable insights.
        </p>

        {/* SKILL HIGHLIGHT */}
        <p className="text-sm text-gray-400 mb-6">
          Python • SQL • BigQuery • Power BI • Data Studio • Machine Learning • React • Laravel
        </p>

        {/* CTA BUTTON */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
          <a
            href="#projects"
            className="bg-cyan-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all"
          >
            Explore Projects
          </a>
          <a
            href={cvRehana}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-300 px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-blue-900 transition-all"
          >
            View CV
          </a>
        </div>

        {/* SOCIAL ICONS (DIPINDAH DARI FOOTER 🔥) */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/rehana-putri/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-blue-900 hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/rehanasalsabilla"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-blue-900 hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:rehanaputri80@gmail.com"
            className="p-3 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-blue-900 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0"
      >
        <img
          src={fotoDiri}
          alt="Rehana"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-cyan-300 shadow-xl object-cover"
        />

        {/* ABOUT */}
        <p className="mt-6 text-sm md:text-base text-gray-200 max-w-lg text-justify leading-relaxed">
          I am an Information Technology student at Institut Teknologi Sepuluh Nopember (ITS) with interests in data analytics, machine learning, and software development.
          Through academic and internship experiences, I have worked on real-world data analysis, dashboard development, machine learning, and web applications using Python, SQL, BigQuery, React, and Laravel.
          I enjoy solving problems with data and building technology that delivers meaningful business value.
        </p>

          {/* QUICK STATS */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-cyan-400/30"
              >
                <h3 className="text-2xl font-bold text-cyan-300">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;