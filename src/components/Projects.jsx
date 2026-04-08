import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

/* ⭐ FEATURED */
const featuredProject = {
  title: "Sales Performance Analysis Dashboard (Kimia Farma)",
  description:
    "Analyzed multi-source transactional data using Google BigQuery to evaluate business performance across branches and provinces. Built an interactive dashboard in Looker Studio to visualize key metrics such as net sales, profit distribution, and branch performance, enabling data-driven decision making.",
  stack: ["BigQuery", "SQL", "Looker Studio", "Data Analysis"],
  link: "https://github.com/rehanasalsabilla/kimia-farma-bigquery-analysis",
};

/* 📦 OTHER PROJECTS */
const projects = [
  {
    title: "Spam Email Classification (PySpark)",
    description:
      "Developed a scalable spam detection model using PySpark and machine learning algorithms with TF-IDF feature extraction.",
    stack: ["Python", "PySpark", "TF-IDF", "Scikit-learn"],
    link: "https://github.com/rehanasalsabilla/BigData_Machine-Learning-Classification-Using-Pyspark",
  },
  {
    title: "Online Retail Analysis & Forecasting",
    description:
      "Performed EDA and built a forecasting model to predict future sales trends and analyze customer behavior.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/rehanasalsabilla/Online-Retail-Analysis-Forecasting",
  },
  {
    title: "Customer Segmentation (Clustering)",
    description:
      "Applied unsupervised learning to segment customers and support targeted marketing strategies.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    link: "https://github.com/rehanasalsabilla/Customer-Personality-Analysis-using-Clustering",
  },
  {
    title: "Emotion & Sentiment Classification",
    description:
      "Built an NLP model using TF-IDF and machine learning algorithms to classify emotions from text.",
    stack: ["Python", "Scikit-learn", "NLP"],
    link: "https://github.com/rehanasalsabilla/Emotion-Classification",
  },
];

/* CARD */
const ProjectCard = ({ title, description, link, stack }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-blue-950/50 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all border border-blue-900"
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4">{description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {stack.map((tech, i) => (
        <span
          key={i}
          className="text-xs bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-white"
    >
      <Github size={18} />
      View Project
    </a>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-linear-to-br from-blue-800 via-gray-800 to-cyan-800 text-white"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Selected projects showcasing my experience in data analysis,
          machine learning, and real-world problem solving.
        </p>
      </div>

      {/* ⭐ FEATURED */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
          ⭐ Featured Project
        </h3>

        <div className="bg-blue-950/60 p-8 rounded-2xl border-2 border-cyan-400 shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            {featuredProject.title}
          </h3>

          <p className="text-gray-300 mb-4">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {featuredProject.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* 📦 OTHER PROJECTS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;