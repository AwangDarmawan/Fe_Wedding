import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";


const ThemeContext = createContext();

 const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // ambil dari localStorage saat load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // toggle dark/cerah
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };
  ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};



export {ThemeProvider, ThemeContext};
// ThemeContext.jsx
