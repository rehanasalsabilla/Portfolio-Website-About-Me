import React from "react";
import { Code, Database, Smartphone } from "lucide-react";

const Skills = () => {
  const dataAnalystSkills = [
    { name: "Python (pandas, numpy, matplotlib, seaborn)" },
    { name: "SQL (MySQL, PostgreSQL)" },
    { name: "Power BI / Tableau" },
    { name: "Exploratory Data Analysis (EDA)" },
    { name: "Machine Learning (K-Means, Regression)" },
  ];

  const webDevSkills = [
    { name: "HTML, CSS, JavaScript (ES6+)" },
    { name: "React.js, Tailwind CSS" },
    { name: "Laravel, MySQL" },
    { name: "Responsive Web Design" },
    { name: "API Integration & Git" },
  ];

  const mobileDevSkills = [
    { name: "Android Studio (Java / Kotlin)" },
    { name: "XML Layout Design" },
    { name: "MVVM Architecture" },
    { name: "REST API Integration" },
    { name: "Firebase & Local Database (Room)" },
  ];

  return (
    <section
      id="skills"
      className="bg-linear-to-br from-cyan-800 via-gray-800 to-[#162d64] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Skills</h2>
        <p className="text-gray-300 mb-12">
          A combination of analytical thinking, web creativity, and mobile innovation 
          to craft impactful digital solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Data Analyst Section */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center mb-4 text-cyan-300">
              <Database className="w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold">Data Analyst</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {dataAnalystSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white/5 rounded-md py-2 px-4 hover:bg-white/10 transition"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Web Development Section */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center mb-4 text-cyan-300">
              <Code className="w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {webDevSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white/5 rounded-md py-2 px-4 hover:bg-white/10 transition"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Development Section */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center mb-4 text-cyan-300">
              <Smartphone className="w-8 h-8 mr-2" />
              <h3 className="text-xl font-semibold">Mobile Development</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              {mobileDevSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-white/5 rounded-md py-2 px-4 hover:bg-white/10 transition"
                >
                  {skill.name}
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
