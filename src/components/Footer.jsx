import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-900 dark:text-gray-100 text-sm mb-4 md:mb-0">
          © 2026 DK. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
          <p className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
            Phone: +94 72 111 5775
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
