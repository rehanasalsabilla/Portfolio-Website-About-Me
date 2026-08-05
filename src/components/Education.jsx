import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const education = [
  {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Information Technology",
    period: "2022 – Present",
    detail: "GPA 3.70 / 4.00",
    note: "Relevant coursework: Artificial Intelligence, Data Mining, Machine Learning, Big Data, Statistical Analysis.",
  },
  {
    school: "SMA Negeri 1 Kauman",
    degree: "Science Major",
    period: "2019 – 2022",
    detail: "Final grade 87.89",
    note: "Built a foundation in analytical and quantitative thinking that carried into my interest in data.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-16 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-14 text-center">
          <span className="text-xs font-mono-data tracking-widest uppercase text-moss">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-forest mt-2">
            Academic Background
          </h2>
        </div>

        <div className="relative pl-10">
          <div className="absolute left-[11px] top-2 bottom-2 w-px timeline-line" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-cream border-2 border-moss flex items-center justify-center">
                <Leaf className="w-3 h-3 text-moss-dark" />
              </span>

              <div className="bg-cream-light border border-forest/10 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                  <h3 className="font-display font-semibold text-lg text-forest">
                    {item.school}
                  </h3>
                  <span className="text-xs font-mono-data text-moss-dark bg-sage-light px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-moss-dark font-medium text-sm mb-2">{item.degree}</p>
                <p className="text-sm text-ink/70 mb-2">{item.detail}</p>
                <p className="text-sm text-ink/60 italic">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
