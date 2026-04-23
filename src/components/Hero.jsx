import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import fotoDiri from "../assets/foto-profile.jpeg";
import cvRehana from "../assets/cv_rehana.pdf";

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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I’m <span className="text-cyan-300">Rehana</span> 👋
        </h1>

        {/* HEADLINE */}
        <p className="text-lg md:text-xl text-gray-200 mb-4">
          Data-driven Developer with experience in web development and data analysis, focused on building scalable applications and transforming data into actionable insights.
        </p>

        {/* SKILL HIGHLIGHT */}
        <p className="text-sm text-gray-400 mb-6">
          React • Laravel • SQL (BigQuery) • Python • Power BI • REST API
        </p>

        {/* CTA BUTTON */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
          <a
            href="#projects"
            className="bg-cyan-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all"
          >
            View My Work
          </a>
          <a
            href={cvRehana}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-300 px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-blue-900 transition-all"
          >
            Download CV
          </a>
        </div>

        {/* SOCIAL ICONS (DIPINDAH DARI FOOTER 🔥) */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/rehana-putri/"
            target="_blank"
            className="p-2 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-blue-900 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/rehanasalsabilla"
            target="_blank"
            className="p-2 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-blue-900 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:rehanaputri80@gmail.com"
            className="p-2 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-blue-900 transition"
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
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-300 shadow-lg object-cover"
        />

        {/* ABOUT */}
        <p className="mt-6 text-sm md:text-base text-gray-200 max-w-lg text-justify leading-relaxed">
          I am an Information Technology student with a strong interest in data analysis and data-driven solutions. I have experience working with real-world datasets, performing data processing, and building dashboards using Python, SQL, and visualization tools. In addition, I have basic experience in web development, including building web applications and integrating data processing into application workflows. I am passionate about leveraging both data and technology to create meaningful and impactful solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;