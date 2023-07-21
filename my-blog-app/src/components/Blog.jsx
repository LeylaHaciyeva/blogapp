import {Link} from 'react-router-dom'
const Blog = (props) => {
  let data = props.post;
  return (
    <div className="card" style={{ width: "25%" }}>
      <div>
        <img className="card-img-top" src={data.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h5 className="card-title">Author: {data.author}</h5>
          <p className="card-text">{data.description.substring(0, 5)}...</p>
          <p>Created: {data.creationDate.substring(0, 10)}</p>
          <Link to={`blog/${data.id}`}  className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
