import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const UserDetail = (props) => {
  const { id } = props.match.params;
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const result = response.data;
        setUser(result);
      })
      .catch((err) => {
        alert(err.message);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        const result = response.data;
        setPosts(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);
  return (
    <div>
      <h1>USER NAME:{user.name}</h1>
      <h2>POSTS WRITTEN BY USER</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserDetail;
