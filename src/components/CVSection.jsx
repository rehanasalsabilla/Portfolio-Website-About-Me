import React from "react";
import { Download } from "lucide-react";
import cvRehana from "../assets/cv_rehana.pdf";

const CVSection = () => {
  return (
  <section
  id="cv"
  className="bg-linear-to-br from-blue-800 via-gray-800 to-cyan-800 text-white py-20 px-6 md:px-16 text-center"
>
  <h2 className="text-3xl font-bold text-cyan-300 mb-6">Curriculum Vitae</h2>
  <p className="text-white-800 mb-10 max-w-2xl mx-auto">
    Interested in learning more about my experience and skills? Download my full CV below.
  </p>

  <a
    href={cvRehana}
    download
    className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
  >
    <Download className="w-5 h-5" />
    Download My CV
  </a>
</section>
  );
};

export default CVSection;
