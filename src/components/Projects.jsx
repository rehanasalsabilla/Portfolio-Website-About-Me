import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

const featuredProject = {
  title: "Sales Performance Analysis Dashboard (Kimia Farma)",
  category: "data",
  description:
    "Analyzed multi-source transactional data using Google BigQuery to evaluate business performance across branches and provinces, identifying top-performing regions and branches with high ratings but low transaction volume.",
  role: "Analyzed the raw transactional dataset end to end, from SQL querying in BigQuery to building the final Looker Studio dashboard used for business reporting.",
  stack: ["BigQuery", "SQL", "Looker Studio", "Data Analysis"],
  link: "https://github.com/rehanasalsabilla/kimia-farma-bigquery-analysis",
};

const projects = [
  {
    title: "Spam Email Classification",
    category: "data",
    description:
      "Scalable spam detection model built with PySpark and TF-IDF feature extraction.",
    role: "Built and evaluated Logistic Regression and Naive Bayes models on a distributed pipeline.",
    stack: ["Python", "PySpark", "TF-IDF", "Scikit-learn"],
    link: "https://github.com/rehanasalsabilla/BigData_Machine-Learning-Classification-Using-Pyspark",
  },
  {
    title: "Online Retail Analysis & Forecasting",
    category: "data",
    description:
      "EDA and a forecasting model to predict future sales trends and analyze customer behavior.",
    role: "Ran the full analysis pipeline: cleaning, EDA, and forecast model training.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/rehanasalsabilla/Online-Retail-Analysis-Forecasting",
  },
  {
    title: "Customer Segmentation (Clustering)",
    category: "data",
    description:
      "Unsupervised learning to segment customers and support targeted marketing strategies.",
    role: "Applied clustering algorithms and interpreted segments into actionable customer profiles.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    link: "https://github.com/rehanasalsabilla/Customer-Personality-Analysis-using-Clustering",
  },
  {
    title: "Emotion & Sentiment Classification",
    category: "data",
    description:
      "NLP model using TF-IDF and machine learning algorithms to classify emotions from text.",
    role: "Handled text preprocessing, feature extraction, and model evaluation.",
    stack: ["Python", "Scikit-learn", "NLP"],
    link: "https://github.com/rehanasalsabilla/Emotion-Classification",
  },
  {
    title: "Government Service Website",
    category: "dev",
    description:
      "A public-facing government service platform for Diskominfo Kabupaten Madiun.",
    role: "Implemented CRUD features, REST API integration, and responsive UI in a 4-person team.",
    stack: ["Laravel", "Vue.js", "MySQL", "Git"],
    link: "https://github.com/rehanasalsabilla",
  },
  {
    title: "Personal Portfolio Website",
    category: "dev",
    description:
      "This portfolio itself — built to present projects and skills through an engaging digital experience.",
    role: "Designed and developed the full site, from layout to responsive styling.",
    stack: ["React.js", "Tailwind CSS", "Vite"],
    link: "https://github.com/rehanasalsabilla",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "data", label: "Data Analytics" },
  { key: "dev", label: "Web & App Dev" },
];

const ProjectCard = ({ title, description, role, link, stack, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    viewport={{ once: true }}
    className="bg-cream-light p-6 rounded-2xl border border-forest/10 shadow-sm hover:shadow-md hover:border-moss/40 transition-all flex flex-col"
  >
    <h3 className="text-lg font-display font-semibold text-forest mb-2">{title}</h3>
    <p className="text-ink/70 text-sm mb-3">{description}</p>
    <p className="text-ink/55 text-xs italic mb-4">My role: {role}</p>

    <div className="flex flex-wrap gap-2 mb-5 mt-auto">
      {stack.map((tech, i) => (
        <span
          key={i}
          className="text-xs bg-sage-light border border-sage text-moss-dark px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-moss-dark font-medium text-sm hover:text-moss"
    >
      <Github size={16} />
      View on GitHub
    </a>
  </motion.div>
);

const Projects = () => {
  const [active, setActive] = useState("all");

  const filteredProjects =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const showFeatured = active === "all" || active === featuredProject.category;

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono-data tracking-widest uppercase text-moss">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-forest mt-2 mb-4">
            Projects
          </h2>
          <p className="text-ink/65 max-w-xl mx-auto text-sm">
            Data analytics projects sit at the core, alongside web &amp; app builds
            that show how I turn analysis into working products.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f.key
                  ? "bg-moss text-cream-light shadow-sm"
                  : "bg-cream-light text-ink/70 border border-forest/10 hover:border-moss/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* FEATURED */}
        {showFeatured && (
          <div className="max-w-4xl mx-auto mb-14">
            <span className="text-xs font-mono-data uppercase tracking-widest text-moss-dark mb-3 block">
              Featured
            </span>
            <div className="bg-forest text-cream-light p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-cream-light/80 mb-3">{featuredProject.description}</p>
              <p className="text-cream-light/60 text-sm italic mb-5">
                My role: {featuredProject.role}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {featuredProject.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cream-light/10 border border-cream-light/20 text-sage-light px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-light font-medium hover:text-cream-light"
              >
                View Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((proj, i) => (
            <ProjectCard key={proj.title} {...proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
