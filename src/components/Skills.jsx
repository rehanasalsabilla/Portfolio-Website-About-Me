import React from "react";
import { Database, BarChart3, Code } from "lucide-react";

const Skills = () => {
  const dataAnalystSkills = [
    "Python (Pandas, NumPy, Matplotlib, Seaborn)",
    "SQL (MySQL, PostgreSQL) – Data Query & Optimization",
    "Exploratory Data Analysis (EDA) & Data Cleaning",
    "Data Visualization (Power BI, Tableau)",
    "Statistical Analysis & Data Interpretation",
    "Machine Learning (Clustering, Regression, Classification)",
  ];

  const dataTools = [
    "Jupyter Notebook / Google Colab",
    "Microsoft Excel (Pivot Table, Data Cleaning)",
    "Git & GitHub",
    "Kaggle",
  ];

  const devSkills = [
    "React.js & Tailwind CSS",
    "Laravel & REST API",
    "Flutter / Android (Basic)",
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-cyan-800 via-gray-900 to-[#162d64] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Focused on data analysis, visualization, and machine learning,
            supported by development skills to build end-to-end solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 🔥 DATA ANALYST (FULL WIDTH) */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-400 shadow-lg hover:shadow-cyan-500/30 transition">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-cyan-300" />
              <h3 className="text-2xl font-semibold">
                Data Analyst
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {dataAnalystSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-cyan-700/80 px-4 py-2 rounded-full text-sm hover:bg-cyan-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 📊 DATA TOOLS */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:shadow-xl hover:-translate-y-1 transition">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">
                Data Tools
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {dataTools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-white/5 px-3 py-2 rounded-md hover:bg-white/10 transition"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* 💻 DEVELOPMENT */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:shadow-xl hover:-translate-y-1 transition">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">
                Development
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {devSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white/5 px-3 py-2 rounded-md hover:bg-white/10 transition"
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