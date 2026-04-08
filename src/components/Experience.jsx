import React from "react";
import { motion } from "framer-motion";

import kominfoLogo from "../assets/diskominfo.png";
import rakaminLogo from "../assets/rakamin.png";
import celeratesLogo from "../assets/celerates.png";

const Experience = () => {
  const experiences = [
    {
      company: "Dinas Komunikasi dan Informatika – Kabupaten Madiun",
      logo: kominfoLogo,
      position: "Internship Full Stack Developer",
      period: "Jan 2025 – March 2025",
      description: [
        "Developed responsive web applications using Laravel, Vue.js, and Inertia.js.",
        "Implemented CRUD functionalities and optimized MySQL database schema design.",
        "Translated UI/UX designs from Figma into functional and user-friendly interfaces.",
        "Collaborated in a 4-member development team using Git for version control.",
        "Improved development workflow efficiency through structured team collaboration.",
      ],
    },
    {
      company: "Rakamin Academy x Kimia Farma",
      logo: rakaminLogo,
      position: "Project Based Internship - Big Data Analytics",
      period: "March 2024 - April 2024",
      description: [
        "Performed exploratory data analysis (EDA) on large-scale datasets.",
        "Built and evaluated machine learning models for classification tasks.",
        "Compared algorithms including Random Forest and Logistic Regression.",
        "Generated actionable insights to support business decision-making.",
      ],
    },
    {
      company: "Cerelates - Data Analyst & Business Intelligence Bootcamp",
      logo: celeratesLogo,
      position: "Data Analyst Trainee",
      period: "Mar 2026 – Present",
      description: [
        "Performed data cleaning, preprocessing, and exploratory data analysis on real-world datasets.",
        "Developed data visualizations and dashboards to generate business insights.",
        "Worked on case studies to support data-driven decision making.",
        "Utilized tools such as SQL, Python, Excel, and Power BI for analysis and reporting.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-16 bg-linear-to-br from-blue-900 via-slate-900 to-cyan-900 text-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-cyan-300">
          Experience
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          My professional experience and technical contributions.
        </p>
      </motion.div>

      {/* GRID 2 KOLOM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-950/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-900 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 object-contain rounded-md bg-white p-1"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-400 italic">
                  {exp.period}
                </p>
                <p className="text-cyan-200 font-medium">
                  {exp.position}
                </p>
              </div>
            </div>

            {/* Description */}
            <ul className="text-gray-200 list-disc list-inside space-y-2 text-left text-sm">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;