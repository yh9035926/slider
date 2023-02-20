import React from "react";
import Slider from "react-slick";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import styled from "styled-components";
import { styleArrow } from "../styleArrow";
import { Link } from "react-router-dom";
import btn from "../img/btn.png";
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const img = [
    {
      id: 1,

      img: img1,
    },

    {
      id: 2,

      img: img2,
    },

    {
      id: 3,

      img: img3,
    },
  ];

  return (
    <div className="wrap">
      <h1>Hello</h1>
      <SearchIcon to="/SearchPage">
        <button>
          <img style={{ width: "34px" }} src={btn} alt="btn" />
        </button>
      </SearchIcon>
      <StyledSlider {...settings}>
        {img.map((i) => (
          <div key={i.id}>
            <Img src={i.img} alt="img" />
          </div>
        ))}
      </StyledSlider>
    </div>
  );
};

export default BannerSlider;

const StyledSlider = styled(Slider)`
  /* 비주얼 영역을 가운데 정렬하기 위한 컨테이너 */

  width: 512px;
  margin: 0 auto;
  ${styleArrow}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SearchIcon = styled(Link)`
  position: absolute;
  top: 0%;
  right: 14%;
  z-index: 10;
`;
