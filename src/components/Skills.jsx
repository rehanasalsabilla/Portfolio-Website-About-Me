import React from "react";
import { Database, BarChart3, Code } from "lucide-react";

const Skills = () => {
  const dataAnalysis = [
    "Python (Pandas, NumPy)",
    "SQL (MySQL, PostgreSQL)",
    "Data Cleaning & Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Statistical Analysis",
    "Machine Learning (Regression, Classification, Clustering)",
  ];

  const dataVisualization = [
    "Power BI",
    "Tableau",
    "Looker Studio",
    "Google BigQuery",
    "Microsoft Excel",
  ];

  const supportingSkills = [
    "PySpark & Big Data Processing",
    "Jupyter Notebook / Google Colab",
    "Git & GitHub",
    "React.js & Laravel (Basic Development)",
  ];

  return (
    <section
      id="skills"
      className="bg-linear-to-br from-cyan-800 via-gray-900 to-[#162d64] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Strong foundation in data analysis, visualization, and machine learning,
            with experience in handling real-world datasets and building data-driven insights.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 🔥 DATA ANALYSIS (UTAMA) */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-400 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-cyan-300" />
              <h3 className="text-2xl font-semibold">
                Data Analysis
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {dataAnalysis.map((skill, index) => (
                <span
                  key={index}
                  className="bg-cyan-700/80 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 📊 DATA VISUALIZATION */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">
                Data Visualization & BI
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {dataVisualization.map((tool, index) => (
                <li
                  key={index}
                  className="bg-white/5 px-3 py-2 rounded-md"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* 💻 SUPPORTING */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">
                Supporting Skills
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {supportingSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white/5 px-3 py-2 rounded-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;