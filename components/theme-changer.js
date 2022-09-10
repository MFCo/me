import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    mounted && (
      <button
        aria-label="Toggle dark mode"
        className=" p-1 px-3 py-2 rounded-lg dark:hover:bg-gray-200 hover:bg-gray-500 bg-gray-800 dark:bg-gray-200 dark:bg-opacity-20 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? "☀️" : "🌙"}
      </button>
    )
  );
};

export default ThemeChanger;
