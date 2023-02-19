import React, { useEffect, useState, useRef } from "react";
import btn from "../img/btn.png";
import styled from "styled-components";
import axios from "axios";

const Header = () => {
  const [userInput, setUserInput] = useState("");
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const userList = () => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  };
  useEffect(() => {
    userList();
  }, []);

  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const onSearch = (e) => {
    e.preventDefault(); // prevent form submission
    setShow(true);
  };

  const searched = users.filter((item) =>
    item.name.toLowerCase().includes(userInput.toLowerCase())
  );

  const handleInputClick = () => {
    setShow(false);
    setUserInput("");
  };

  return (
    <div>
      <SearchBox onSubmit={onSearch}>
        <input
          className="margin-t"
          type="text"
          onChange={getValue}
          value={userInput}
          ref={inputRef}
          onClick={handleInputClick}
        />
        <button type="submit" onClick={onSearch}>
          <img style={{ width: "15px" }} src={btn} alt="btn" />
        </button>
      </SearchBox>
      {show &&
        searched.map((item) => {
          if (userInput === null || userInput === "") {
            return <div key={item.id}></div>;
          } else {
            return (
              <div key={item.id} className="flex">
                <Content>Name:{item.name}</Content>
                <Content>userName:{item.username}</Content>
                <Content>Phone:{item.phone}</Content>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Header;

const SearchBox = styled.form`
  width: 700px;
  z-index: 10;
  margin: 0 auto;
  text-align: right;
`;

const Content = styled.div`
  width: 240px;
  margin-left: 10px;
  background-color: white;

`;
