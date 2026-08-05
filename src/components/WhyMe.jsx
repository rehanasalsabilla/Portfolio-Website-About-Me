import React from "react";
import { motion } from "framer-motion";
import { Sprout, Puzzle, Users } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "Data-first, product-aware",
    text:
      "I don't stop at the analysis. Because I can also build the dashboard or web app the data lives in, I think about how insights actually get used, not just how they're calculated.",
  },
  {
    icon: Puzzle,
    title: "Comfortable with ambiguous data",
    text:
      "From messy transactional datasets to unlabeled text, I've practiced turning raw, imperfect data into something a business can act on.",
  },
  {
    icon: Users,
    title: "Collaborative by habit",
    text:
      "Beyond technical work, I've led cross-functional teams as General Secretary of my student organization, which sharpened how I communicate findings to non-technical stakeholders.",
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-24 px-6 md:px-16 bg-forest text-cream-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono-data tracking-widest uppercase text-sage">
            Why Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2">
            What I Bring to the Table
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="bg-cream-light/5 border border-cream-light/15 rounded-2xl p-7"
              >
                <div className="w-11 h-11 rounded-full bg-sage-light/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-sage-light" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-cream-light/75 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
