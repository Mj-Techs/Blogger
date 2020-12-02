import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllPost = (props) => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const result = response.data;
        setAllPost(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <h1>Total Posts:{allPost.length}</h1>
      <ul>
        {allPost.map((post) => {
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
export default AllPost;
