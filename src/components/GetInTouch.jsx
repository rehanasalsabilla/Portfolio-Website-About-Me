import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/rehana-putri/", label: "LinkedIn" },
  { icon: Github, link: "https://github.com/rehanasalsabilla", label: "GitHub" },
  { icon: Mail, link: "mailto:rehanaputri80@gmail.com", label: "Email" },
  { icon: Phone, link: "tel:+6281234436974", label: "Phone" },
  { icon: Instagram, link: "https://www.instagram.com/rrehanaa_/", label: "Instagram" },
];

const GetInTouch = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-xs font-mono-data tracking-widest uppercase text-moss">
          Let's Talk
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-forest mt-2 mb-5">
          Get in Touch
        </h2>
        <p className="text-ink/65 max-w-xl mx-auto mb-10">
          Open to internship and entry-level opportunities in data analysis and
          business intelligence. Let's talk about how data can move your business forward.
        </p>

        <a
          href="mailto:rehanaputri80@gmail.com"
          className="inline-flex items-center gap-2 bg-moss text-cream-light font-semibold px-8 py-3.5 rounded-full hover:bg-moss-dark transition-all shadow-sm mb-12"
        >
          Say Hello <ArrowUpRight className="w-4 h-4" />
        </a>

        <div className="flex justify-center gap-4 flex-wrap">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-cream-light border border-forest/10 rounded-full text-forest hover:bg-moss hover:text-cream-light hover:-translate-y-1 transition-all duration-300"
                aria-label={item.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
