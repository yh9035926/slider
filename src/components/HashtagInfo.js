import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const HashtagInfo = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users" + id).then((res) => {
      setUser(res.data);
    }, []);
  });

  return (
    <div>
      <div>정보</div>
      <div style={{ border: "1px solid", width: "100px", height: "100px" }}>
        {user.name}
      </div>
      <div style={{ border: "1px solid", width: "100px", height: "100px" }}>
        {user.email}
      </div>
      <div style={{ border: "1px solid", width: "100px", height: "100px" }}>
        {user.phone}
      </div>
      <h3>
        <Link to="/">뒤로</Link>
      </h3>
    </div>
  );
};

export default HashtagInfo;
