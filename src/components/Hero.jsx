import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, Eye, Download, X } from "lucide-react";
import fotoDiri from "../assets/foto-profile.png";
import cvRehana from "../assets/cv_rehana.pdf";

const stats = [
  { value: "3", label: "Internships" },
  { value: "9+", label: "Projects" },
  { value: "9+", label: "Certifications" },
];

const Hero = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-16 pt-32 pb-20 bg-cream"
    >
      {/* organic blob accent behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 w-[420px] h-[420px] bg-sage-light rounded-full blur-3xl opacity-60 -z-10"
      />

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light border border-sage text-moss-dark text-xs font-mono-data mb-6">
          available for internship &amp; entry-level roles
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4 leading-tight text-forest">
          Hi, I'm <span className="text-moss">Rehana</span>
        </h1>

        <p className="text-ink/60 mb-4 font-mono-data text-sm">
          Surabaya, Indonesia
        </p>

        <p className="text-lg md:text-xl text-ink/85 mb-4 leading-relaxed">
          Aspiring <span className="text-moss-dark font-semibold">Data Analyst</span> &amp;{" "}
          <span className="text-moss-dark font-semibold">Business Intelligence</span> enthusiast,
          turning raw data into insights that support real business decisions.
        </p>

        <p className="text-sm text-ink/55 mb-8 font-mono-data">
          Python · SQL · BigQuery · Power BI · Looker Studio · Machine Learning
        </p>

        {/* ABOUT ME */}
        <p className="text-sm md:text-base text-ink/80 max-w-xl leading-relaxed mb-8 text-justify">
          I'm an Information Technology student at Institut Teknologi Sepuluh Nopember (ITS)
          with a strong interest in data analysis and data-driven decision making. Through
          internships and hands-on projects, I've worked on exploratory data analysis,
          dashboard development, and machine learning, backed by a working knowledge of
          full-stack development that lets me carry a data product from raw dataset to
          finished dashboard.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
          <button
            onClick={() => setShowCV(true)}
            className="inline-flex items-center justify-center gap-2 bg-moss text-cream-light font-semibold px-6 py-3 rounded-full hover:bg-moss-dark transition-all"
          >
            <Eye className="w-4 h-4" />
            View CV
          </button>
          <a
            href={cvRehana}
            download
            className="inline-flex items-center justify-center gap-2 border border-moss text-moss-dark px-6 py-3 rounded-full hover:bg-sage-light transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center md:justify-start gap-4">
          <a href="https://www.linkedin.com/in/rehana-putri/" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-forest/5 border border-forest/10 rounded-full hover:bg-moss hover:text-cream-light hover:-translate-y-1 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/rehanasalsabilla" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-forest/5 border border-forest/10 rounded-full hover:bg-moss hover:text-cream-light hover:-translate-y-1 transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="mailto:rehanaputri80@gmail.com"
            className="p-3 bg-forest/5 border border-forest/10 rounded-full hover:bg-moss hover:text-cream-light hover:-translate-y-1 transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex flex-col items-center"
      >
        <div className="relative">
          <div className="absolute -inset-3 bg-sage rounded-[45%_55%_60%_40%/45%_40%_60%_55%] -z-10" />
          <img
            src={fotoDiri}
            alt="Rehana Putri Salsabilla"
            className="w-60 h-60 md:w-80 md:h-80 rounded-[45%_55%_60%_40%/45%_40%_60%_55%] border-4 border-cream-light shadow-xl object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 w-full max-w-sm">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-cream-light rounded-xl p-4 text-center border border-forest/10 shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-moss-dark">
                {item.value}
              </h3>
              <p className="text-[11px] text-ink/60 mt-1 font-mono-data uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CV MODAL */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-forest/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-light rounded-2xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-forest/10">
                <h3 className="font-display font-semibold text-forest">Curriculum Vitae</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={cvRehana}
                    download
                    className="inline-flex items-center gap-2 text-sm text-moss-dark hover:text-moss font-medium"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                  <button
                    onClick={() => setShowCV(false)}
                    className="p-1.5 rounded-full hover:bg-forest/10"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-forest" />
                  </button>
                </div>
              </div>
              <iframe
                src={cvRehana}
                title="Rehana Putri Salsabilla CV"
                className="flex-1 w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
