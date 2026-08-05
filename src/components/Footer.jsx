import React from "react";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream-light/60 py-6 text-center text-xs font-mono-data">
      <p>© {new Date().getFullYear()} Rehana Putri Salsabilla. Built with React &amp; Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;
