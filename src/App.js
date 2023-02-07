import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="body">
        <button className="btn">Hello</button>
        <button className="btns">Button</button>
        <button className="btnr">
          <span className="shape"></span>Button
        </button>
        <div className="box"></div>
      </div>
    </>
  );
}

export default App;
