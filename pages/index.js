import { useTheme } from "../contexts/ThemeContext.js";

export default function Home() {
  const { darkMode, toggleTheme } = useTheme();

  const themeClass = darkMode ? "dark" : "light";

  return (
    <div className={`bg-white dark:bg-gray-900 min-h-screen ${themeClass}`}>
      {/* <div
      className={`bg-white ${
        darkMode ? "dark" : "light"
      } dark:bg-gray-900 min-h-screen`}
    > */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          Theme Context Example
        </h1>
        <p className="mb-4 dark:text-slate-400">
          Current Theme: <strong>{darkMode ? "Dark" : "Light"}</strong>
        </p>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
