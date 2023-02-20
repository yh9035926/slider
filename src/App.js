import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagInfo from "./components/HashtagInfo";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import "./style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<HashtagInfo />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
