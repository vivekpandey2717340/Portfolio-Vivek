import React from "react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", logo: "/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.webp" },
    { name: "CSS", logo: "/css3-logo-png-transparent.png" },
    { name: "JavaScript", logo: "/javascript-logo-javascript-icon-transparent-free-png.webp" },
    { name: "Python", logo: "/python-logo-png-open-2000.png" },
    { name: "MongoDB", logo: "/mongodb_original_logo_icon_146424.webp" },
    { name: "Java", logo: "/java-logo-transparent-free-png.webp" },
    { name: "Node.js", logo: "/Node.js-Logo.wine.png" },
    { name: "React", logo: "/222-2224712_react-react-logo-png.png" }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-white text-gray-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-8">Skills</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div>
            <h4 className="text-lg font-bold">Technical Skills</h4>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                  </div>
                  <span className="mt-2 text-center text-sm md:text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-lg font-bold mt-8 lg:mt-0">Soft Skills</h4>
            <div className="mt-2">
              <p className="text-sm md:text-base">Communication, Decision-making, Problem-solving, Good Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
