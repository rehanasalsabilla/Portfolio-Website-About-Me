import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Big Data Analytics Project (Kimia Farma x Rakamin)",
    issuer: "Rakamin Academy x Kimia Farma",
    date: "2026",
    link: "https://drive.google.com/file/d/1uVlmtJjKcQyNGOiE7LQ4iLgGLhfv0Kuk/view?usp=sharing",
  },
    {
    title: "Data Analyst & Business Intelligence – Internship",
    issuer: "Celerates Acceleration Mastery Program (CAMP) Batch 4",
    date: "Jul 2026",
    link: "https://drive.google.com/file/d/1ON5Ea4MQ4_tpb86FOscL0FO675mk2XPQ/view?usp=sharing",
  },
  {
    title: "Data Analyst & Business Intelligence – Completion (90%+ Attendance)",
    issuer: "Celerates Acceleration Mastery Program (CAMP) Batch 4",
    date: "Jul 2026",
    link: "https://drive.google.com/file/d/1Nk6j8euVf2wG5lufFjm2nSvvPUdgeP1l/view?usp=sharing",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Hactiv8",
    date: "2025",
    link: "https://drive.google.com/file/d/1-p5xqDePCQnQTXC-5nvMZcOY7PeaIxOk/view?usp=sharing",
  },
  {
    title: "Data Analyst with SQL & Python",
    issuer: "DQLab",
    date: "Aug 2025",
    link: "https://academy.dqlab.id/certificate/pdf/DQLABMB7SPBKWMLN",
  },
  {
    title: "Data Analyst with Excel",
    issuer: "DQLab",
    date: "Aug 2025",
    link: "https://academy.dqlab.id//certificate/pdf/DQLABMB7EXCFKGDOT",
  },
  {
    title: "Machine Learning & AI Fundamentals",
    issuer: "DQLab",
    date: "Aug 2025",
    link: "https://academy.dqlab.id/certificate/pdf/DQLABMB7MAIKWBDIE",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "RevoU",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1e0WgHgZ8fNNAdORwOb_BPwt1I-GzQBiC/view",
  },
  {
    title: "Introduction to Data Analyst",
    issuer: "Coding Studio",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1sc_cWOaCbK7j6wRJOn29MUN-TYmapu3f/view?usp=sharing",
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "MySkill",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1HuE8qzdCKe9iUTMd4K2OR0baSntXLffN/view",
  },
  {
    title: "IT Support Professional Certificate",
    issuer: "Coursera (Google)",
    date: "Jan 2023",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/DWPFVY6MZLUE",
  },
  {
    title: "Soft Skills on Job Readiness Training",
    issuer: "INCO Academy – Work in Tech Indonesia",
    date: "2025",
    link: "https://drive.google.com/file/d/1ZoDjDcjpBInvaYOFpkiwrl7L5I_6pQ8c/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-mono-data tracking-widest uppercase text-moss">
          Continuous Learning
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-forest mt-2 mb-4">
          Certifications
        </h2>
        <p className="text-ink/65 mb-12 max-w-2xl mx-auto text-sm">
          Selected certifications reflecting my continuous learning in data analysis,
          machine learning, and business intelligence. Click a card to view the certificate.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
              viewport={{ once: true }}
              className="bg-cream-light rounded-2xl border border-forest/10 p-5 transition-all hover:shadow-md hover:border-moss/40 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-moss-dark" />
                </div>
                <h3 className="text-sm font-semibold text-forest leading-snug">
                  {cert.title}
                </h3>
                <p className="text-ink/60 text-xs mt-1">{cert.issuer}</p>
                <span className="text-[11px] font-mono-data text-moss mt-2">
                  {cert.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
