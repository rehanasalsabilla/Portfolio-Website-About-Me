import React from "react";
import { motion } from "framer-motion";
import { Globe, Database, Github, Smartphone } from "lucide-react";

const dataProjects = [
  {
    title: "Online-Retail-Analysis-Forecasting",
    description:
      "A retail sales data analysis project that utilizes machine learning to predict sales trends and understand customer behavior.",
    stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow"],
    link: "https://github.com/rehanasalsabilla/Online-Retail-Analysis-Forecasting",
  },
  {
    title: "Emotion-Classification",
    description:
      "A Python-based project that classifies text emotions using NLP preprocessing and machine learning algorithms with Scikit-learn and Pandas. ",
    stack: ["Python", "NumPy", "TensorFlow", "Keras", "Matplotlib", "Scikit-learn",],
    link: "https://github.com/rehanasalsabilla/Emotion-Classification",
  },
  {
    title: "Big Data Project (Spam Email Classification)",
    description:
      "a Python-based machine learning project that uses text classification models to distinguish between spam and non-spam (ham) emails by leveraging TF-IDF vectorization and supervised learning algorithms such as Naive Bayes.",
    stack: ["Python", "NumPy", "NLTK", "WordCloud",  "Matplotlib & Seaborn", "Scikit-learn",],
    link: "https://github.com/rehanasalsabilla/BigData_Machine-Learning-Classification-Using-Pyspark",
  },
  {
    title: "Animals-Image-Classification",
    description:
      "Animals Image Classification is a deep learning project that uses Convolutional Neural Network (CNN) to classify various types of animals based on digital images, with processes including image preprocessing, data augmentation, model training, and accuracy performance evaluation.",
    stack: ["Python", "NumPy", "OpenCV", "os / pathlib",  "Matplotlib", "Scikit-learn",],
    link: "https://github.com/rehanasalsabilla/Animals-Image-Classification",
  },
  {
    title: "ML : predicting the number of promotions",
    description:
      "Building a machine learning model to predict the number of promotions (num_promotions) based on the features available in the dataset.",
    stack: ["Python", "Pandas",  "NumPy", "Matplotlib", "Scikit-learn","TensorFlow / Keras"],
    link: "https://github.com/rehanasalsabilla/Predicting-the-number-of-promotions",
  },
  {
    title: "Statistical Data Analysis and Probability",
    description:
      "Calculate odds (probability) and apply basic statistical concepts such as binomial distribution, conditional probability, and statistical inference.",
    stack: ["Python", "Pandas",  "NumPy", "SciPy", "matplotlib"],
    link: "https://github.com/rehanasalsabilla/Analisis-Data-Statistik-dan-Probabilitas",
  },
  {
    title: "Analisis data dan Penerapan algoritma clustering (unsupervised learning)",
    description:
      "This project is a data analysis and application of clustering algorithms (unsupervised learning) to group customer data based on their characteristics.",
    stack: ["Python", "Pandas",  "NumPy", "Scikit-learn", "matplotlib", "seaborn"],
    link: "https://github.com/rehanasalsabilla/Analisis-data-dan-penerapan-algoritma-clustering",
  },
   {
    title: "Customer Personality Analysis using Clustering)",
    description:
      "The goal is to group customers based on their characteristics and behavior, so companies can understand customer profiles, create more targeted marketing strategies, and increase customer retention.",
    stack: ["Python", "Pandas",  "NumPy", "Scikit-learn", "matplotlib", "seaborn"],
    link: "https://github.com/rehanasalsabilla/Customer-Personality-Analysis-using-Clustering",
  },
];

const webProjects = [
  {
    title: "KP - Website Diskominfo Kabupaten Madiun",
    description:
      "Full Stack Developer developing responsive websites using Laravel, Vue.js, and Inertia.js.",
    stack: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "TailwindCSS"],
    link: "https://github.com/rehanasalsabilla/Kerja-Praktik-Kominfo-Madiun",
  },
  {
    title: "Portfolio Website - About Me",
    description:
      "Personal portfolio showcasing my profile, skills, and experiences through an interactive UI built with React.js and TailwindCSS.",
    stack: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/rehanasalsabilla/Portfolio-Website-About-Me",
  },
];

const mobileProjects = [
  // {
  //   title: "FP-Mobile-Agriculture-App",
  //   description:
  //     "AgriVision adalah aplikasi mobile berbasis Android yang membantu petani memantau kesehatan tanaman dan mengelola lahan secara efisien menggunakan teknologi GPS dan speech-to-text.",
  //   stack: ["Android Studio", "Java", "TensorFlow Lite", "Firebase"],
  //   link: "https://github.com/rehanasalsabilla/FP-Mobile-Agriculture-App-",
  // },
  {
    title: "Project Capstone RoboT IT",
    description:
      "An IoT and AI-based robot system designed to welcome guests and deliver automated, informative interactions.",
    stack: ["Arduino", "ESP32", "Python", "TensorFlow", "Android Studio"],
    link: "https://github.com/rehanasalsabilla/Project-Capstone-Kelompok-D",
  },
];

const ProjectCard = ({ title, description, link, stack, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-blue-950/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all border border-blue-900"
  >
    <div className="text-cyan-300 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-gray-300 text-sm text-center mb-4">{description}</p>

    {/* Stack / Tech Used */}
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {stack.map((tech, i) => (
        <span
          key={i}
          className="text-xs bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-white font-medium transition-colors"
      >
        <Github size={18} />
        View on GitHub
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-linear-to-br from-blue-800 via-gray-800 to-cyan-800 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A collection of my works in web development, data analysis, and mobile applications.
        </p>
      </motion.div>

      {/* Data Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Database className="text-cyan-400" /> Data Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {dataProjects.map((proj, i) => (
            <ProjectCard key={i} {...proj} icon={<Database size={32} />} />
          ))}
        </div>
      </div>

      {/* Web Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Globe className="text-cyan-400" /> Web Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {webProjects.map((proj, i) => (
            <ProjectCard key={i} {...proj} icon={<Globe size={32} />} />
          ))}
        </div>
      </div>

      {/* Mobile Apps Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Smartphone className="text-cyan-400" /> Mobile Apps Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {mobileProjects.map((proj, i) => (
            <ProjectCard key={i} {...proj} icon={<Smartphone size={32} />} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
