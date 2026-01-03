import { useState } from "react";
import DefaultCert from "../assets/certificate.jpg";
import java from "../certificates/java.jpg";
import javabasics from "../certificates/java-basics.png";
import css from "../certificates/css.png";
import jsbasics from "../certificates/js-basics.png";
import csharp from "../certificates/c-sharp.png";

const certificates = [
  {
    title: "Java Application Development",
    description:
      "Completed an in-depth Java Application Development program at the National Institute of Business Management, focusing on object-oriented programming, core Java concepts, and building practical, real-world applications.",
    image: java,
    credentials: null,
  },
  {
    title: "Foundational C# with Microsoft",
    description:
      "Gained a strong foundation in C# programming through a Microsoft-backed course, covering core syntax, variables, control structures, and basic application development concepts.",
    image: csharp,
    credentials: null,
  },
  {
    title: "CSS (Basics)",
    description:
      "Earned a HackerRank certification by demonstrating knowledge of core CSS concepts, including layout techniques, styling rules, responsiveness fundamentals, and best practices for modern web design.",
    image: css,
    credentials: "https://www.hackerrank.com/certificates/6b9a502e746e",
  },
  {
    title: "Java (Basics) Programming",
    description:
      "Successfully completed the Java Basics certification on HackerRank, validating proficiency in Java syntax, data types, control flow, and problem-solving using core programming principles.",
    image: javabasics,
    credentials: "https://www.hackerrank.com/certificates/3c9c3ed005cc",
  },
  {
    title: "Python Programming",
    description:
      "Achieved the Python Programming certification from HackerRank, demonstrating a solid understanding of Python fundamentals, including variables, functions, loops, and basic data structures.",
    image: jsbasics,
    credentials: "https://www.hackerrank.com/certificates/936a3f215228",
  },
];


export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="bg-gray-100 dark:bg-gray-900 py-16 sm:py-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => {
            const hasImage = !!cert.image;
            const hasCredentials = !!cert.credentials;
            return (
              <div
                key={index}
                className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={hasImage ? cert.image : DefaultCert}
                  alt={cert.title || "Certificate"}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {cert.title || "Certificate"}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 flex-grow">
                    {cert.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    {hasImage && (
                      <button
                        onClick={() =>
                          setSelectedCert(cert.image ? cert.image : DefaultCert)
                        }
                        className="inline-block text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View Certificate
                      </button>
                    )}
                    {hasCredentials && (
                      <a
                        href={cert.credentials}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View Credentials
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden w-full max-w-sm sm:max-w-lg md:max-w-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-2xl sm:text-3xl z-50"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
