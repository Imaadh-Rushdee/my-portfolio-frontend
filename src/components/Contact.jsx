import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_787vd3l",
        "template_w8oybg9",
        form.current,
        "M_UT4GkwPVEw3JEkQ"
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          form.current.reset(); // clear the fields
          setSending(false);
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 py-20 sm:py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          Contact Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg text-center mb-12">
          I’m currently open to opportunities and collaborations. Connect with me via GitHub, LinkedIn, or email.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
          {/* GitHub */}
          <a
            href="https://github.com/imaadh-rushdee"
            target="_blank"
            rel="noreferrer"
            className="flex-1 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                GitHub
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                View my projects and repositories
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/imaadh-rushdee"
            target="_blank"
            rel="noreferrer"
            className="flex-1 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                LinkedIn
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Connect me professionally
              </p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
