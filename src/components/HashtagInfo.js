import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const HashtagInfo = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users/" + id).then(
      (res) => {
        setUser(res.data);
      },
      [id]
    );
  });

  return (
    <div>
      <div>정보</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      
      <h3>
        <Link to="/">뒤로</Link>
      </h3>
    </div>
  );
};

export default HashtagInfo;
