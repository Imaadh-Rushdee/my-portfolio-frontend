const projects = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracking app that allows users to add, edit, and analyze their daily expenses with category-based insights.",
    tech: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Management System",
    description:
      "A microservices-based school management system handling students, staff, attendance, exams, and notifications.",
    tech: ["Spring Boot", "MySQL", "Docker", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website with dark mode, smooth scrolling, and modern UI design.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Projects
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
