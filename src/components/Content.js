import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Usercontext } from "../context/UserContext";
const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(Usercontext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      {user}님, 좋은 하루 되세요
    </div>
  );
};

export default Content;
