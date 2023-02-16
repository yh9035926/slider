import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { styleArrow } from "../styleArrow";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Hashtag = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    }, []);
  });

  return (
    <div className="margin-t">
      <div className="center">
        <StyledSlider {...settings}>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </StyledSlider>
        <div>여기 왜 안 나오지?{users.username}</div>
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
