import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function Card({
  _id,
  title,
  author,
  category,
  imageUrl,
  createdAt,
  description,
}) {
  return (
    <div className="col-lg-6">
      <div className="card text-center mb-5">
        <div className="card-header p-0">
          <div className="blog-media">
            <img src={imageUrl} alt={title} className="w-100" />
            <Link to={`/postDetails/${_id}`} className="badge badge-dark">
              #{category}
            </Link>
          </div>
        </div>
        <div className="card-body px-0">
          <h5 className="card-title mb-2">{title}</h5>
          <h6 className="card-title mb-2">{author}</h6>
          <small className="small text-muted">
            {createdAt}
            <span className="px-2">-</span>
            <a href="#" className="text-muted">
              34 Comments
            </a>
          </small>
        </div>

        <div className="card-footer p-0 text-center">
          <Link
            to={`/postDetails/${_id}`}
            className="btn btn-outline-dark btn-sm"
          >
            READ MORE
          </Link>
        </div>
      </div>
      <hr/>
    </div>
  );
}
