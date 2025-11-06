import React from "react";
import { motion } from "framer-motion";
import fotoDiri from "../assets/foto-diri.jpg";
import cvRehana from "../assets/cv_rehana.pdf";

const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 pt-28 pb-20 
    bg-linear-to-br from-cyan-800 via-gray-800 to-[#162d64] text-white"
>
      {/* Kiri: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-cyan-300">Rehana</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Web & Data Enthusiast passionate about clean design and smart data.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-cyan-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all"
          >
            View My Work
          </a>
          <a
            href={cvRehana}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-300 px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-blue-900 transition-all"
          >
            View & Download CV
          </a>
        </div>
      </motion.div>

      {/* Kanan: Foto dan About Me */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0"
      >
        <img
          src={fotoDiri}
          alt="Rehana"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-300 shadow-lg object-cover"
        />
        <p className="mt-6 text-sm md:text-base text-gray-200 max-w-lg text-justify leading-relaxed">
          I am a 2022 undergraduate student in Information Technology at
          Sepuluh Nopember Institute of Technology (ITS), born in Tulungagung on
          September 25, 2003. With a strong interest and certifications in data,
          I am developing skills in analysis, processing, and visualization to
          pursue a career as a Data Analyst. I have experience in committees,
          organizations, and community service, as well as strong managerial,
          communication, and public speaking abilities. I enjoy teamwork,
          networking, and tackling challenges that drive growth.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
