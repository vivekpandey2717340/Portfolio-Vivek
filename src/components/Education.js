import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8">Education</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold">ITM University, Gwalior</h4>
            <p className="text-gray-600">BTech (Computer Science and Engineering), 2020 – 2024</p>
            <p>CGPA: 7.3</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Mithila Institute of Technology, Nepal</h4>
            <p className="text-gray-600">12th (NEB), 2018 - 2019</p>
            <p>Percentage: 71%</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Sinha Public School, Nepal</h4>
            <p className="text-gray-600">10th (SLC), 2015 - 2016</p>
            <p>Percentage: 80%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
