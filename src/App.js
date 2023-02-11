import React, { useState } from "react";
import Page from "./components/Page";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { Usercontext } from "./context/UserContext";
const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Usercontext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </Usercontext.Provider>
  );
};
export default App;
