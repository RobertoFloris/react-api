import Cards from "./partials/Cards";
import axios from "axios"
import { useEffect, useState } from "react";

const Posts = () => {

  const apiUrl = "http://localhost:3000"

  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        console.log(res.data);
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container">
      <h1 className="my-4 text-center">Gestione Post</h1>
      <div className="row g-4">
        <Cards />
      </div>
    </div>
  );
};

export default Posts;
