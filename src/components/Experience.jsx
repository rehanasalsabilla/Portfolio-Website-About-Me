import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Leaf } from "lucide-react";

import kominfoLogo from "../assets/diskominfo.png";
import rakaminLogo from "../assets/rakamin.png";
import celeratesLogo from "../assets/celerates.png";
import bimaLogo from "../assets/bima-pelindo.png";

const experiences = [
  {
    company: "PT Berkah Industri Mesin Angkat (PT BIMA) – Pelindo Group",
    logo: bimaLogo,
    position: "Data Analyst Intern – Logistics Division (Procurement Planning)",
    period: "Sep 2026 – Present",
    location: "Surabaya, East Java",
    summary:
      "Learning end-to-end procurement data flow under the Planning Sub-Division, from Excel-based data handling to Purchase Requisition packaging within an SAP-based business process.",
    details: [
      "Processed and organized procurement-related data in Excel under the Planning Sub-Division of the Logistics Division, cross-checking it against datasets already connected to Looker Studio dashboards to ensure consistency between raw data and existing visualizations.",
      "Prepared Purchase Requisition (PR) packages prior to handover to the Procurement Sub-Division, learning the documentation and validation steps required before a request moves into the procurement cycle.",
      "Learning the end-to-end procurement business process within an SAP-based ERP environment, gaining exposure to how planning, requisition, and procurement stages are interconnected in a real operational setting.",
    ],
    skills: ["Excel", "Data Matching", "Looker Studio", "SAP", "Procurement Process"],
  },
  {
    company: "Cerelates – Data Analyst & Business Intelligence Bootcamp",
    logo: celeratesLogo,
    position: "Data Analyst Trainee",
    period: "Mar 2026 – June 2026",
    location: "Remote",
    summary:
      "End-to-end data analysis training: cleaning, EDA, dashboarding, and business case studies.",
    details: [
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on real-world datasets.",
      "Developed data visualizations and dashboards to generate business insights.",
      "Worked on case studies to support data-driven decision making.",
      "Utilized SQL, Python, Excel, and Power BI for analysis and reporting.",
    ],
    skills: ["SQL", "Python", "Excel", "Power BI"],
  },
  {
    company: "Rakamin Academy x Kimia Farma",
    logo: rakaminLogo,
    position: "Project-Based Intern, Big Data Analytics",
    period: "Mar 2026 – Apr 2026",
    location: "Remote",
    summary:
      "Analyzed a year of transactional sales data to uncover revenue trends and built a business-facing dashboard.",
    details: [
      "Analyzed one-year transactional sales data using SQL and BigQuery to identify revenue trends, customer behavior, and product performance.",
      "Performed data preprocessing and exploratory data analysis (EDA) on raw transactional data.",
      "Developed an interactive sales dashboard in Looker Studio to support data-driven business decisions.",
      "Completed the internship with an excellent evaluation score of 91.25.",
    ],
    skills: ["SQL", "BigQuery", "Looker Studio", "EDA"],
  },
  {
    company: "Dinas Komunikasi dan Informatika – Kabupaten Madiun",
    logo: kominfoLogo,
    position: "Full Stack Developer Intern",
    period: "Jan 2025 – Mar 2025",
    location: "Madiun, East Java",
    summary:
      "Built and maintained a government service website, strengthening the engineering foundation behind my data work.",
    details: [
      "Developed responsive web applications using Laravel, Vue.js, and Inertia.js.",
      "Implemented CRUD functionality and optimized the MySQL database schema for data consistency.",
      "Translated UI/UX designs from Figma into functional, user-friendly interfaces.",
      "Collaborated in a 4-member development team using Git for version control.",
    ],
    skills: ["Laravel", "Vue.js", "MySQL", "Git"],
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className="py-24 px-6 md:px-16 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono-data tracking-widest uppercase text-moss">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-forest mt-2 mb-4">
            Experience
          </h2>
          <p className="text-ink/65 max-w-xl mx-auto text-sm">
            Click any role to see the full scope of what I worked on.
          </p>
        </div>

        <div className="relative pl-10">
          <div className="absolute left-[11px] top-2 bottom-2 w-px timeline-line" />

          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setSelected(exp)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative block w-full text-left mb-8 last:mb-0 group"
            >
              <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-cream border-2 border-moss flex items-center justify-center">
                <Leaf className="w-3 h-3 text-moss-dark" />
              </span>

              <div className="bg-cream-light border border-forest/10 rounded-2xl p-6 shadow-sm group-hover:shadow-md group-hover:border-moss/40 transition-all">
                <div className="flex items-start gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 object-contain rounded-lg bg-white p-1.5 border border-forest/10"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-display font-semibold text-forest text-lg">
                        {exp.company}
                      </h3>
                      <span className="text-xs font-mono-data text-moss-dark bg-sage-light px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-moss-dark font-medium text-sm mb-2">{exp.position}</p>
                    <p className="text-sm text-ink/70">{exp.summary}</p>
                    <span className="inline-block mt-3 text-xs font-mono-data text-moss underline underline-offset-4">
                      view details
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-forest/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-light rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between px-6 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={selected.logo}
                    alt={selected.company}
                    className="w-12 h-12 object-contain rounded-lg bg-white p-1.5 border border-forest/10"
                  />
                  <div>
                    <h3 className="font-display font-semibold text-forest text-lg leading-tight">
                      {selected.company}
                    </h3>
                    <p className="text-moss-dark text-sm font-medium">{selected.position}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-full hover:bg-forest/10 shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-forest" />
                </button>
              </div>

              <div className="px-6 pt-4 flex flex-wrap items-center gap-3 text-xs font-mono-data text-ink/60">
                <span className="bg-sage-light text-moss-dark px-3 py-1 rounded-full">
                  {selected.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {selected.location}
                </span>
              </div>

              <div className="px-6 py-5">
                <ul className="space-y-2.5 mb-5">
                  {selected.details.map((d, i) => (
                    <li key={i} className="text-sm text-ink/80 flex gap-2">
                      <span className="text-moss mt-1">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {selected.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs bg-moss text-cream-light px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
