import React from "react";
import { Code, Database, BarChart3, Server } from "lucide-react";

const Skills = () => {
  const frontend = [
    "HTML, CSS, JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ];

  const backend = [
    "Laravel",
    "RESTful API Development",
    "CRUD Operations",
  ];

  const database = [
    "MySQL",
    "SQL",
    "Google BigQuery",
  ];

  const dataSkills = [
    "Python (Pandas, NumPy)",
    "Data Cleaning & Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Machine Learning",
  ];

  const visualization = [
    "Power BI",
    "Tableau",
    "Looker Studio",
    "Microsoft Excel",
  ];

  const tools = [
    "Git & GitHub",
    "Jupyter Notebook / Colab",
    "PySpark",
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
            Full Stack Developer with additional expertise in data analysis and
            data-driven application development.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FRONTEND */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {frontend.map((skill, i) => (
                <li key={i} className="bg-white/5 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* BACKEND */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {backend.map((skill, i) => (
                <li key={i} className="bg-white/5 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* DATABASE */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">Database</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {database.map((skill, i) => (
                <li key={i} className="bg-white/5 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* DATA (VALUE ADD 🔥) */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">Data & Analytics</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {dataSkills.map((skill, i) => (
                <li key={i} className="bg-white/5 px-3 py-2 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* VISUALIZATION */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">Visualization & BI</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {visualization.map((tool, i) => (
                <li key={i} className="bg-white/5 px-3 py-2 rounded-md">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* TOOLS */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-7 h-7 text-cyan-300" />
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
              {tools.map((skill, i) => (
                <li key={i} className="bg-white/5 px-3 py-2 rounded-md">
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