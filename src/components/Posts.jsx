import Cards from "./partials/Cards";
import axios from "axios"
import { useEffect, useState } from "react";

const Posts = () => {

  const apiUrl = "http://localhost:3000"

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
      })
  }

  const handDeletePost = (id) => {
    axios.delete(`${apiUrl}/posts/${id}`)
      .then(res => {
        fetchPosts()
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container">
      <h1 className="my-4 text-center">Gestione Post</h1>
      <div className="row g-4">
        {posts.map(post => (
          <Cards key={post.id} post={post} onDelete={() => handDeletePost(post.id)} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
