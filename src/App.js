import React from "react";
import BannerSlider from "./components/BannerSlider";
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import "./style.css";
const App = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <Hashtag />
    </>
  );
};

export default App;
