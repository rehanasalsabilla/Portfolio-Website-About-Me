import React from "react";
import { motion } from "framer-motion";
import { Database, Github } from "lucide-react";

const featuredProjects = [
  {
    title: "Spam Email Classification (PySpark)",
    description:
      "Developed a scalable spam detection model using PySpark and machine learning algorithms. Applied TF-IDF feature extraction and classification models to distinguish spam and non-spam emails.",
    stack: ["Python", "PySpark", "TF-IDF", "Scikit-learn"],
    link: "https://github.com/rehanasalsabilla/BigData_Machine-Learning-Classification-Using-Pyspark",
  },
  {
    title: "Online Retail Analysis & Forecasting",
    description:
      "Performed exploratory data analysis and built a forecasting model to predict future sales trends. Generated insights on customer behavior and product performance.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    link: "https://github.com/rehanasalsabilla/Online-Retail-Analysis-Forecasting",
  },
  {
    title: "Customer Segmentation using Clustering",
    description:
      "Applied unsupervised learning techniques to group customers based on behavior and characteristics, enabling targeted marketing strategies and better customer insights.",
    stack: ["Python", "Scikit-learn", "Seaborn", "Pandas"],
    link: "https://github.com/rehanasalsabilla/Customer-Personality-Analysis-using-Clustering",
  },
  {
    title: "Emotion & Sentiment Classification (NLP)",
    description:
      "Built a text classification model using NLP techniques and machine learning algorithms. Applied preprocessing, TF-IDF, and evaluated model performance using accuracy metrics.",
    stack: ["Python", "Scikit-learn", "TensorFlow", "NLP"],
    link: "https://github.com/rehanasalsabilla/Emotion-Classification",
  },
];

const ProjectCard = ({ title, description, link, stack }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-blue-950/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all border border-blue-900"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-white font-medium transition-colors"
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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Selected projects showcasing my experience in data analysis, machine learning, and real-world problem solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {featuredProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;