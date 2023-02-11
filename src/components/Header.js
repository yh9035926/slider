import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Usercontext } from "../context/UserContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(Usercontext);
  return (
    <div
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      Welcome {user}!
    </div>
  );
};

export default Header;
