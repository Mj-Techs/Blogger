import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ShowPostInfo = (props) => {
  //   console.log(props);
  const { id } = props.match.params;
  const [userPost, setUserPost] = useState([]);
  const [userName, setName] = useState("");
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        const result = response.data[0];
        setUserPost(result);
      })
      .catch((err) => {
        alert(err.message);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        const result = response.data;
        setComment(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);
  useEffect(() => {
    if (userPost.userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userPost.userId}`)
        .then((response) => {
          const result = response.data.name;
          //   console.log(result);
          setName(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [userPost.userId]);
  return (
    <div>
      <h1>USER NAME:{userName}</h1>
      <h1>TITLE:{userPost.title}</h1>
      <h2>
        BODY:
        {userPost.body}
      </h2>
      <hr />
      <h1>COMMENTS</h1>
      <ul>
        {comment.map((com) => {
          return <li key={com.id}>{com.body}</li>;
        })}
      </ul>
      <hr />
      <Link>More posts of author:{userName}</Link>
    </div>
  );
};
export default ShowPostInfo;
