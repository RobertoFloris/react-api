const Cards = (props) => {
  const { title, content, image, tags } = props.post
  const { onDelete } = props;
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={image} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <p className="card-text"><strong>{tags.join(", ")}</strong></p>
          <a href="#" className="btn btn-danger" onClick={onDelete}>Elimina</a>
        </div>
      </div>
    </div>
  )
}

export default Cards