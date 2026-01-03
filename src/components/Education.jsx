import { useState } from "react";
import diplomaImg from "../certificates/diploma.jpg";
import defaultCert from "../assets/certificate.jpg"; // fallback if none

const educationData = [
  {
    degree: "Higher National Diploma in Software Engineering",
    institution: "National Institute Of Business Management",
    duration: "2025 - 2026",
    description:
      "Studied mathematics, science, and technology-related subjects, building a strong foundation for engineering studies.",
    certificate: null,
  },
  {
    degree: "Diploma In Software Engineering",
    institution: "National Institute Of Business Management",
    duration: "2024 - 2025",
    description:
      "Focused on software development, data structures, databases, and building scalable applications using modern technologies.",
    certificate: diplomaImg,
  },
];

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="education"
      className="bg-white dark:bg-gray-900 py-16 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Education
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                  {edu.duration}
                </span>
              </div>

              <p className="text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                {edu.institution}
              </p>

              <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>

              {edu.certificate ? (
                <button
                  onClick={() => setSelectedCert(edu.certificate)}
                  className="mt-4 inline-block text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate →
                </button>
              ) : (
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
                  No certificate available
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-3xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-2xl"
            >
              ✕
            </button>

            <img
              src={selectedCert || defaultCert}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
