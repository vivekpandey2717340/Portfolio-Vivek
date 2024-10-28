import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Vivek Pandey. All rights reserved.</p>
      <div className="space-x-4 flex items-center justify-center mt-2">
        {/* GitHub Logo */}
        <a
          href="https://www.github.com/vivekpandey2717340"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <svg
            className="w-6 h-6 inline-block"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.073.55-.173.55-.386 0-.189-.007-.74-.01-1.36-2.24.486-2.71-1.08-2.71-1.08-.365-.926-.89-1.175-.89-1.175-.727-.497.055-.487.055-.487.803.057 1.223.823 1.223.823.713 1.22 1.87.866 2.32.662.072-.516.278-.866.505-1.065-1.78-.202-3.648-.892-3.648-3.963 0-.874.313-1.587.826-2.148-.083-.202-.357-1.018.078-2.12 0 0 .673-.215 2.2.82.639-.178 1.32-.266 2.002-.27.682.004 1.364.092 2.002.27 1.527-1.035 2.2-.82 2.2-.82.436 1.102.162 1.918.079 2.12.514.561.826 1.274.826 2.148 0 3.082-1.87 3.762-3.65 3.963.285.245.537.73.537 1.469 0 1.06-.01 1.916-.01 2.178 0 .214.15.465.55.386C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        
        {/* LinkedIn Logo */}
        <a
          href="https://www.linkedin.com/in/vivek-pandey-9b407524a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <svg
            className="w-6 h-6 inline-block"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1.25 0C.56 0 0 .56 0 1.25v13.5C0 15.44.56 16 1.25 16h13.5C15.44 16 16 15.44 16 14.75V1.25C16 .56 15.44 0 14.75 0h-13.5zM4.75 13.5H2.5V6.5h2.25v7zm-1.12-8.08a1.31 1.31 0 1 1 0-2.62 1.31 1.31 0 0 1 0 2.62zm11.12 8.08h-2.25v-3.53c0-.85-.015-1.94-1.18-1.94-1.19 0-1.37.93-1.37 1.9v3.67h-2.25V6.5h2.25v1c.31-.59 1.08-1.2 2.24-1.2 2.4 0 2.85 1.58 2.85 3.64v3.66z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

