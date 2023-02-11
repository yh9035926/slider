import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </div>
  );
};

export default Footer;
