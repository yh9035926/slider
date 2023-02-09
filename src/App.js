import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const Click = () => {
    setName((pre) => {
      return [...pre, input];
    });
  };

  const Enter = (e) => {
    if (e.key === "Enter") {
      Click();
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={input}
        onKeyUp={Enter}
      ></input>
      <button onClick={Click}>Upload</button>
      {name.map((n) => {
        return <div>{n}</div>;
      })}
    </div>
  );
};

export default App;
