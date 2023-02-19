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
  const [showMenu, setShowMenu] = useState("");

  const handleLinkClick = (id) => {
    setShowMenu(id);
  };

  const handleMenuClose = () => {
    setShowMenu("");
  };

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
              <div onClick={() => handleLinkClick(user.id)}>
                {user.username}
              </div>
              {showMenu === user.id && (
                <div>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                  <button onClick={handleMenuClose}>Close</button>
                  <span>
                    <Link to={`/users/${user.id}`}> 더 보기</Link>
                  </span>
                </div>
              )}
            </li>
          ))}
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
  ${styleArrow} {
    .slick-arrow {
      top: 12px;
    }
  }
`;
