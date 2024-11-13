import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "TWB Website Backend",
      description: "Created backend using Node.js",
      link: "https://twbcreates.com/",
      image: "/Screenshot 2024-10-28 123018.png"
    },
    {
      name: "Real Estate Website Backend",
      description: "Built comprehensive backend with property listings support",
      link: "https://suyogk.com.np/",
      image: "WhatsApp Image 2024-09-05 at 13.56.40_fe0f3f94.jpg"
    },
    {
      name: "Create Himalayan Adventure",
      description: "Created backend using Node.js",
      link: "https://createhimalaya.com/",
      image: "/Screenshot 2024-10-28 122926.png"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h3 className="text-3xl font-semibold text-center mb-12">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md w-full">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-56 overflow-hidden rounded-xl shadow-lg"
            >
              <img src={project.image} alt={`${project.name} - Project`} className="w-full h-full object-cover" />
            </a>
            <div className="p-6 text-center">
              <h4 className="mb-2 text-2xl font-semibold text-blue-gray-900">
                {project.name}
              </h4>
              <p className="text-base font-medium text-blue-800">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
