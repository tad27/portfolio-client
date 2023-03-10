import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  if (localStorage.theme) {
    return localStorage.getItem("theme");
  }
  return "system";
};

const html = document.documentElement;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (localStorage?.theme === "dark") {
      setTheme("dark");
    } else if (localStorage?.theme === "light") {
      setTheme("light");
    } else {
      setTheme("system");
    }

    const listener = (e) => setTheme(e.matches && "system");
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    switch (theme) {
      case "dark":
        html.classList.add("dark");
        localStorage.theme = "dark";
        break;
      case "light":
        html.classList.remove("dark");
        localStorage.theme = "light";
        break;
      default:
        // Case "System"
        if (mediaQuery.matches) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
