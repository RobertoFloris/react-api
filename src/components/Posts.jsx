import Cards from "./partials/Cards";
import axios from "axios"
import { useEffect, useState } from "react";

const Posts = () => {

  const defaultObject = {
    title: "",
    content: "",
    image: "",
    tags: "",
  }

  const apiUrl = "http://localhost:3000"

  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(defaultObject);


  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
      })
  }


  useEffect(() => {
    fetchPosts()
  }, [])


  const handDeletePost = (id) => {
    axios.delete(`${apiUrl}/posts/${id}`)
      .then(res => {
        fetchPosts()
      })
  }


  const handleInput = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }


  const handleAddPost = (e) => {
    e.preventDefault();
    const arrayTags = formData.tags.split("#").map(item => item.trim()).filter(item => item.trim());

    const postToSend = {
      ...formData,
      tags: arrayTags
    }

    axios.post(`${apiUrl}/posts`, postToSend)
      .then(res => {
        setPosts(res.data)
        setFormData(defaultObject)
      })
  }


  return (
    <div className="container">

      <h1 className="my-4 text-center">Gestione Post</h1>
      <div className="row g-4">
        {posts.map(post => (
          <Cards key={post.id} post={post} onDelete={() => handDeletePost(post.id)} />
        ))}
      </div>

      <form>
        <h2 className="text-center m-4">Inserisci un nuovo post!</h2>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">Descrizione</label>
          <input
            type="text"
            className="form-control"
            name="content"
            id="content"
            value={formData.content}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Url Immagine</label>
          <input
            type="text"
            className="form-control"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags (Es. #tags #posts)</label>
          <input
            type="text"
            className="form-control"
            name="tags"
            id="tags"
            value={formData.tags}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleAddPost}>Inserisci</button>
      </form>
    </div>
  );
};

export default Posts;
