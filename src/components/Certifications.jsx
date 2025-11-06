import React from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const certificates = [
    {
      title: "Mini Bootcamp Introduction to Data Analytics - Study Case Bootcamp Machine learning & AI for Beginner",
      issuer: "DQLab",
      date: "Aug 2025",
      link: "https://academy.dqlab.id/certificate/pdf/DQLABMB7MAIKWBDIE",
    },
    {
      title: "Mini Bootcamp Introduction to Data Analytics - Study Case Bootcamp Data Analyst with Excel",
      issuer: "DQLab",
      date: "Aug 2025",
      link: "https://academy.dqlab.id/certificate/pdf/DQLABMB7SPBKWMLN",
    },
    {
      title: "Mini Bootcamp Introduction to Data Analytics - Study Case Bootcamp Data Analyst with SQL & Python",
      issuer: "DQLab",
      date: "Aug 2025",
      link: "https://academy.dqlab.id/certificate/pdf/DQLABMB7SPBKWMLN",
    },
    {
      title: "Free Class - Into to Data Analyst",
      issuer: "Coding Studio",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1sc_cWOaCbK7j6wRJOn29MUN-TYmapu3f/view?usp=sharing",
    },
    {
      title: "Short Class Data Analysis by MySkill",
      issuer: "MySkill",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1HuE8qzdCKe9iUTMd4K2OR0baSntXLffN/view",
    },
    {
      title: "Certified Online Course Offered by RevoU",
      issuer: "RevoU",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1e0WgHgZ8fNNAdORwOb_BPwt1I-GzQBiC/view",
    },
    {
      title: "Soft Skills on Job Readiness training",
      issuer: "INCO Academy",
      date: "Jul 2023",
      link: "https://drive.google.com/file/d/1ZoDjDcjpBInvaYOFpkiwrl7L5I_6pQ8c/view?usp=sharing",
    },
    {
      title: "Managing Websites for Software Developers",
      issuer: "Cybers Academy",
      date: "Sept 2023",
      link: "https://drive.google.com/file/d/1c1N0y0xbCvHmhL2QwNKH0wrnbgcyl4lf/view?usp=sharing",
    },
    {
      title: "IT Support Google - Final Course Coursera",
      issuer: "Coursera",
      date: "Jan 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/DWPFVY6MZLUE",
    },
  ];

  return (
    <section id="certifications" className="bg-linear-to-br from-cyan-800 via-gray-800 to-[#162d64] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Certifications</h2>
        <p className="text-white-600 mb-10">
          A showcase of my certifications that demonstrate my continuous learning and specialization.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
  key={index}
  href={cert.link}  
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 rounded-2xl shadow-md border border-white/20 p-6 transition duration-300 hover:shadow-xl hover:scale-105"
>
  <div className="flex flex-col items-center text-center">
    <Award className="w-12 h-16 text-cyan-300 mb-2" />
    <h3 className="text-l font-semibold text-cyan-300">{cert.title}</h3>
    <p className="text-gray-300 text-xl mt-1">{cert.issuer}</p>
    <span className="text-sm text-gray-400 mt-2">{cert.date}</span>
  </div>
</a>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
