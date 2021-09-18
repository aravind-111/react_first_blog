import React from 'react';
import axios from 'axios';

function Comments({ match }) {
  let b = match.params.id;
  console.log(b);
  //   const [post, setPost] = useState({});
  try {
    let fetchData = async () => {
      const comments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${b}/comments`
      );
      console.log(comments.data);
    };
    fetchData();
  } catch (err) {
    console.log('error in comments');
  }
  return (
    <>
      <p>poda</p>
    </>
  );
}

export default Comments;
