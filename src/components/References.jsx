const references = [
  {
    name: "Jane Doe",
    role: "Senior Software Engineer | Mentor",
    email: "jane.doe@email.com",
    phone: "+94 77 123 4567",
    linkedin: "https://linkedin.com/in/janedoe",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "John Smith",
    role: "Team Lead",
    email: "john.smith@email.com",
    phone: "+94 71 987 6543",
    linkedin: "https://linkedin.com/in/johnsmith",
    avatar: null,
  },
  {
    name: "Alice Johnson",
    role: "Professor – Software Engineering",
    email: "alice.johnson@university.edu",
    phone: null,
    linkedin: null,
    avatar: null,
  },
];

export default function References() {
  return (
    <section
      id="references"
      className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-14">
          References
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {references.map((ref, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                {ref.avatar ? (
                  <img
                    src={ref.avatar}
                    alt={ref.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                    {ref.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {ref.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ref.role}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                {ref.email && (
                  <p className="text-gray-700 dark:text-gray-300">
                    📧{" "}
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {ref.email}
                    </a>
                  </p>
                )}

                {ref.phone && (
                  <p className="text-gray-700 dark:text-gray-300">
                    📞{" "}
                    <a href={`tel:${ref.phone}`} className="hover:underline">
                      {ref.phone}
                    </a>
                  </p>
                )}

                {ref.linkedin && (
                  <p className="text-gray-700 dark:text-gray-300">
                    🔗{" "}
                    <a
                      href={ref.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </p>
                )}

                {!ref.email && !ref.phone && !ref.linkedin && (
                  <p className="text-gray-500 italic">
                    Contact details available upon request
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
