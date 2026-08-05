import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Database, LineChart, Server, Code2, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Data & Analytics",
    icon: BarChart3,
    featured: true,
    items: [
      "Python (Pandas, NumPy)",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Machine Learning",
      "SQL Query & Optimization",
    ],
  },
  {
    title: "Visualization & BI",
    icon: LineChart,
    featured: true,
    items: ["Power BI", "Looker Studio", "Tableau", "Microsoft Excel"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    featured: false,
    items: ["MySQL", "SQL", "Google BigQuery", "PostgreSQL"],
  },
  {
    title: "Web Development",
    icon: Server,
    featured: false,
    items: ["Laravel", "Vue.js / React.js", "RESTful API", "CRUD Operations"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    featured: false,
    items: ["Python", "SQL", "JavaScript", "Java"],
  },
  {
    title: "Tools",
    icon: Wrench,
    featured: false,
    items: ["Git & GitHub", "Jupyter Notebook / Colab", "PySpark", "Docker"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono-data tracking-widest uppercase text-moss">
            Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-forest mt-2 mb-4">
            Technical Skills
          </h2>
          <p className="text-ink/65 max-w-xl mx-auto text-sm">
            Rooted in data analysis and business intelligence, with a full-stack
            background that lets me build the products data lives in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border transition-all ${
                  group.featured
                    ? "bg-moss text-cream-light border-moss-dark shadow-md"
                    : "bg-cream-light text-ink border-forest/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${group.featured ? "text-sage-light" : "text-moss-dark"}`} />
                  <h3 className="text-lg font-display font-semibold">{group.title}</h3>
                </div>

                <ul className="space-y-2">
                  {group.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className={`text-sm px-3 py-2 rounded-lg ${
                        group.featured
                          ? "bg-cream-light/10"
                          : "bg-sage-light/60 text-ink/80"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
