import React from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const certificates = [
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
  ];

  return (
    <section
      id="certifications"
      className="bg-linear-to-br from-cyan-800 via-gray-900 to-[#162d64] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-300 mb-6">
          Certifications
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Selected certifications that reflect my continuous learning in data analysis,
          machine learning, and technical skills.
        </p>

        {/* GRID 4 KOLOM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-2xl shadow-md border border-white/20 p-5 transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <Award className="w-10 h-10 text-cyan-300 mb-2" />
                <h3 className="text-sm font-semibold text-cyan-300">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {cert.issuer}
                </p>
                <span className="text-xs text-gray-400 mt-2">
                  {cert.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;