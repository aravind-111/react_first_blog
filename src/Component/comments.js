import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function Comments({ match }) {
  let b = match.params.id;
  console.log(b);
  console.log('hello');
  const [post, setPost] = useState([]);

  let fetchData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${b}/comments`
    );
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <p>{post.data[0].body}</p> */}
      {post.map((data) => {
        return (
          <div className="bigWraper" key={data.id}>
            <p>ID: {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Email : {data.email}</p>
            <p>Body : {data.body}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default Comments;
