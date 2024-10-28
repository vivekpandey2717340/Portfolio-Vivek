import React from "react";
import './Hero.css'; // Make sure to create this CSS file

const Hero = () => {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto text-center">
        <div className="image-container">
          <img
            src="/vivek.jpg" // Image path from the public folder
            alt="Vivek Pandey"
            className="rounded-full moving-image"
          />
        </div>
        <h2 className="text-4xl font-bold mb-4">Hello, I'm Vivek Pandey</h2>
        <p className="text-lg font-medium mb-6">
          Backend Developer based in Kathmandu, Nepal. Passionate about creating
          efficient and scalable solutions.
        </p>
        <a
          href="#about"
          className="bg-white text-blue-800 py-2 px-6 rounded-full font-semibold hover:bg-blue-500 hover:text-white"
        >
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
