import React from "react";
import ProfilePhoto from "../assets/profile.jpg"; // replace with your photo

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center transition-colors duration-500" id="home">
      <div className="container max-w-[1300px] mx-auto flex flex-col md:flex-row items-center px-4 md:px-12">
        
        {/* Photo on the Left */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="max-w-[350px] w-full h-auto rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Professional Summary on the Right */}
        <div className="md:w-1/2 md:pl-[40px] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m Imaadh Rushdee
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-blue-600 dark:text-blue-400">
            Software Engineering Student & Web Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I build modern, responsive, and user-focused web applications using technologies like React and Tailwind CSS, with a strong focus on clean design and scalable code.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
