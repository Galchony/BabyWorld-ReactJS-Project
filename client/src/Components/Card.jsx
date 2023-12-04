import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function Card({
  _id,
  title,
  author,
  category,
  imageUrl,
  createdAt,
  onDetailsClick,
}) {
  const onDetailsClickHandler = () => {
    onDetailsClick(_id);
  };

  return (
    <div className="col-lg-6">
      <div className="card text-center mb-5">
        <div className="card-header p-0">
          <div className="blog-media">
            <img src={imageUrl} alt={title} className="w-100" />
          </div>
        </div>
        <div className="card-body px-0">
          <h5 className="card-title mb-2">{title}</h5>
          <h6 className="card-title mb-2">Category: {category}</h6>
          <h6 className="card-title mb-2">Created by: {author}</h6>
          <small className="small text-muted">
            {createdAt}
            <span className="px-2">-</span>
            <a href="#" className="text-muted">
              34 Comments
            </a>
          </small>
        </div>

        <div className="card-footer p-0 text-center">
          <button
            onClick={onDetailsClickHandler}
            className="btn btn-outline-dark btn-sm"
          >
            READ MORE
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
