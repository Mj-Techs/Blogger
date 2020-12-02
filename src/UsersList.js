import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const UsersList = (props) => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data;
        setUserList(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <h1>USERS LIST:{userList.length}</h1>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UsersList;
