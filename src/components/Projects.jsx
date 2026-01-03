const projects = [
  {
    title: "Finance Management System",
    description:
      "A full-stack Finance Management System that allows users to add, edit, and analyze their daily expenses with category-based insights.",
    tech: ["PHP", "Oracle Database", "PL/SQL"],
    github: "https://github.com/Imaadh-Rushdee/data-management-course-work.git",
    demo: null,
  },
  {
    title: "School Management System",
    description:
      "A microservices-based school management system handling students, staff, attendance, exams, and notifications.",
    tech: ["Spring Boot", "MySQL", "Docker", "REST API"],
    github: "https://github.com/Imaadh-Rushdee/School-Management-System.git",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website with dark mode, smooth scrolling, and modern UI design.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Imaadh-Rushdee/my-portfolio.git",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
