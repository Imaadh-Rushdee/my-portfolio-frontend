export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Contact Me
        </h2>

        {/* Info Text */}
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12">
          I’m currently open to opportunities and collaborations. Connect with me via GitHub, LinkedIn, or email.
        </p>

        {/* Social Media Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {/* GitHub Card */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex-1 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                GitHub
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                View my projects and repos
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex-1 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                LinkedIn
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Connect with me professionally
              </p>
            </div>
          </a>
        </div>

        {/* Optional Contact Form */}
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
