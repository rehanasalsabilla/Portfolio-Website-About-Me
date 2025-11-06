import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Dinas Komunikasi dan Informatika – Kabupaten Madiun",
    position: "Internship Full Stack Developer",
    period: "Jan 2025 – Mar 2025",
    description: `
      During my internship at the Department of Communication and Informatics of Madiun Regency,
      I worked as a Full Stack Developer developing responsive websites using Laravel, Vue.js, and Inertia.js.
      I implemented CRUD features, designed MySQL database schemas, and translated Figma designs into functional web interfaces.
      Collaborating in a four-person team, I used Git and GitHub/GitLab for version control to ensure efficient development and deployment workflows.
    `,
  };

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
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-cyan-300">Experience</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          My professional experience and technical contributions.
        </p>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-blue-950/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-900 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
      >
        <div className="flex flex-col items-center text-center mb-4">
          <Building2 size={40} className="text-cyan-300 mb-2" />
          <h3 className="text-2xl font-semibold">{experience.company}</h3>
          <p className="text-sm text-gray-400 italic">{experience.period}</p>
          <p className="text-cyan-200 font-medium">{experience.position}</p>
        </div>
        <p className="text-gray-200 leading-relaxed text-justify whitespace-pre-line">
          {experience.description}
        </p>
      </motion.div>
    </section>
  );
};

export default Experience;
