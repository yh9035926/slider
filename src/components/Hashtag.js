import React from "react";
import Slider from "react-slick";
import { styleArrow } from "../styleArrow";
import styled from "styled-components";

const Hashtag = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="margin-t">
      <div className="center">
        <StyledSlider {...settings}>
          <li>
            <a href="">#해시태그1</a>
          </li>
          <li>
            <a href="">#해시태그2</a>
          </li>
          <li>
            <a href="">#해시태그3</a>
          </li>
          <li>
            <a href="">#해시태그4</a>
          </li>
          <li>
            <a href="">#해시태그5</a>
          </li>
          <li>
            <a href="">#해시태그6</a>
          </li>
          <li>
            <a href="">#해시태그7</a>
          </li>
          <li>
            <a href="">#해시태그8</a>
          </li>
          <li>
            <a href="">#해시태그9</a>
          </li>
        </StyledSlider>
      </div>
    </div>
  );
};

export default Hashtag;

const StyledSlider = styled(Slider)`
  /* 비주얼 영역을 가운데 정렬하기 위한 컨테이너 */

  width: 512px;
  margin: 0 auto;
  ${styleArrow}
`;
