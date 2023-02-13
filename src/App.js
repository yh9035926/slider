import React, { useCallback, useEffect, useState } from "react";
import Box from "./components/Box";

const App = () => {
  const [number, setNumber] = useState(100);
  const [isDark, setIsdark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${number}px`,
      height: `${number}px`,
    };
  }, [number]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => setIsdark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle}></Box>
    </div>
  );
};

export default App;
