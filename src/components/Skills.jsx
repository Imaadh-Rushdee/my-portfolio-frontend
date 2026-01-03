import React from "react";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Oracle Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 py-20 transition-colors duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          My Skills
        </h2>

        <div className="grid gap-6 justify-center 
                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center 
                         transition transform hover:scale-105 duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4 object-contain"
              />
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg sm:text-xl">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
