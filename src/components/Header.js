import React from "react";
import btn from "../img/btn.png";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <SearchBox>
        <input className="margin-t" type="text" />
        <button>
          <img style={{ width: "15px" }} src={btn} alt="btn" />
        </button>
      </SearchBox>
    </div>
  );
};

export default Header;

const SearchBox = styled.div`
  width: 700px;
  z-index: 10;
  margin: 0 auto;
  text-align: right;
`;
