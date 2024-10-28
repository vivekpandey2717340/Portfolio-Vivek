import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white text-black py-4 shadow-md fixed w-full top-0 z-50 backdrop-blur">
         <div className="container mx-auto flex justify-between items-center px-6">

        <img 
          src="/favicon16.png"
          alt="Logo"
          className="h-10" 
        />
        
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;