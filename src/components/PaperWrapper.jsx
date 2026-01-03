export default function PageWrapper({ children }) {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-animated
        transition-colors duration-500
        bg-gradient-to-br
        from-blue-100 via-indigo-100 to-purple-100
        dark:from-gray-900 dark:via-gray-800 dark:to-black
      "
    >
      {children}
    </div>
  );
}
