const Cards = (props) => {
  const { title, content, image, tags } = props.post
  const { onDelete } = props;
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={image} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <p className="card-text"><strong>{tags.map(tag => tag = `#${tag}`).join(" ")}</strong></p>
          <button className="btn btn-danger" onClick={onDelete}>Elimina</button>
        </div>
      </div>
    </div>
  )
}

export default Cards