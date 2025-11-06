import React from "react";
import { Linkedin, Github, Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  const contacts = [
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/rehana-putri/", label: "LinkedIn" },
    { icon: <Github />, link: "https://github.com/rehanasalsabilla", label: "GitHub" },
    { icon: <Mail />, link: "mailto:rehanaputri80@gmail.com", label: "Email" },
    { icon: <Phone />, link: "tel:+6281234436974", label: "Phone" },
    { icon: <Instagram />, link: "https://www.instagram.com/rrehanaa_/", label: "Instagram" },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-900 py-4 text-center text-neutralLight"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-blue-200 mb-4">
          I’d love to connect! Feel free to reach out via social media or email me directly.
        </p>

        <div className="flex justify-center gap-6">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
