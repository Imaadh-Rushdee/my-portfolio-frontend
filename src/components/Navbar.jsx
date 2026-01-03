import React from "react";


function Navbar({ darkMode, setDarkMode }) {
    return (
         <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-500 p-4 flex items-center shadow-md">
      {/* Left: Logo */}
      <div className="flex-1">
        <h1 className="text-gray-900 dark:text-gray-100 font-bold text-xl">
          My Portfolio
        </h1>
      </div>

      {/* Center: Menu */}
      <div className="flex-1 flex justify-center space-x-8">
        <a
          href="#home"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Projects
        </a>
        <a
          href="#education"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Education
        </a>
        <a
          href="#references"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          References
        </a>
        <a
          href="#contact"
          className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Contact
        </a>
      </div>

      {/* Right: Dark mode toggle */}
      <div className="flex-1 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>

    )
}

export default Navbar;