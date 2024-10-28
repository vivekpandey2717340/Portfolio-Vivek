import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black py-4 shadow-md fixed w-full top-0 z-50 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center px-6">
        <img src="/favicon16.png" alt="Logo" className="h-10" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 py-4">
          <a href="#about" className="block py-2 hover:text-blue-500">About</a>
          <a href="#experience" className="block py-2 hover:text-blue-500">Experience</a>
          <a href="#projects" className="block py-2 hover:text-blue-500">Projects</a>
          <a href="#education" className="block py-2 hover:text-blue-500">Education</a>
          <a href="#skills" className="block py-2 hover:text-blue-500">Skills</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
