import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagInfo from "./components/HashtagInfo";
import Home from "./components/Home";
import "./style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<HashtagInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
