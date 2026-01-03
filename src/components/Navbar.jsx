import React, { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const sections = ["home", "about", "skills", "projects", "education", "references", "contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between py-3">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Imaadh Rushdee | Portfolio
          </h1>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-transform duration-150 active:scale-95"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Right: Dark Mode & Hamburger */}
        <div className="flex items-center space-x-2 md:space-x-0">
          {/* Desktop Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded transition-transform duration-150 active:scale-95"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 text-center">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 font-medium py-1 transition-transform duration-150 active:scale-95"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          {/* Mobile Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 w-full px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded transition-transform duration-150 active:scale-95"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
