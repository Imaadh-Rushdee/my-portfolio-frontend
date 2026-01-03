import React from "react";

export default function Bio() {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 transition-colors duration-500"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 text-center md:text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I’m a passionate software engineering student with a strong interest in building modern, scalable, and user-focused applications. I enjoy working across the full development process — from planning and designing clean interfaces to implementing reliable logic and improving performance. My current focus is on frontend development using technologies like React and Tailwind CSS, while steadily expanding my knowledge of backend systems and APIs.</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I believe good software is not just about writing code, but about solving real problems and creating meaningful experiences for users. I enjoy learning new technologies, experimenting with better approaches, and continuously improving my skills through hands-on projects. I’m motivated by curiosity, consistency, and the challenge of turning ideas into real-world applications. As I continue to grow as a developer, I aim to build products that are both technically solid and thoughtfully designed.

        </p>
        <p className="text-gray-700 dark:text-gray-300">
          My goal is to continuously improve as a developer and deliver projects that make an impact.
        </p>
      </div>
    </section>
  );
}
