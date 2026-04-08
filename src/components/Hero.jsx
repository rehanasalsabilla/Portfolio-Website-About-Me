import React from "react";
import { motion } from "framer-motion";
import fotoDiri from "../assets/foto-profile.jpeg";
import cvRehana from "../assets/cv_rehana.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 pt-28 pb-20 
        bg-linear-to-br from-cyan-800 via-gray-800 to-[#162d64] text-white"
    >
      {/* Kiri */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-cyan-300">Rehana</span> 👋
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Data Analyst Enthusiast with experience in data analysis, visualization, and machine learning. Passionate about transforming data into actionable insights.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
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
      </motion.div>

      {/* Kanan */}
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

        <p className="mt-6 text-sm md:text-base text-gray-200 max-w-lg text-justify leading-relaxed">
          I am an Information Technology student at ITS with a strong focus on data analysis and data-driven solutions. Experienced in working with real-world datasets, including sales analysis and dashboard development using tools such as Python, SQL (BigQuery), and Power BI/Looker Studio. 
          I have built machine learning and data analysis projects to extract insights, identify patterns, and support decision-making. I am passionate about turning complex data into meaningful and impactful insights.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;