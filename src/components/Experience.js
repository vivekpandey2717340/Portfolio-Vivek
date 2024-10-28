import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white text-gray-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8">Experience</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold">Backend Developer</h4>
            <p className="text-gray-600">TWB Creatives — Kathmandu, Nepal</p>
            <p className="text-gray-500">June 2024 – Present (4 months, Full-time, On-site)</p>
            <p className="mt-2">Projects:</p>
            <ul className="list-disc list-inside">
              <li>TWB Website Backend (Node.js)</li>
              <li>Real Estate Website Backend (Node.js)</li>
              <li>Rojgari in Khadi Website Backend (Node.js)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
