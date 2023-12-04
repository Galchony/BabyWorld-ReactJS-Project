import { useState, useEffect } from "react";

import * as postService from "../../services/postService";

import Card from "../Card";
import Details from "../PostDetails/Details";

import styles from "./Catalog.module.css";

export default function Catalog(props) {
  const [posts, setPosts] = useState([]);
  const [isTherePost, setIsTherePost] = useState(false);
  const [postId, setPostId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    postService
      .getAll()
      .then((result) => {
        setPosts((state) => [...state, ...result]);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClose = () => {
    setShowDetails(false);
  };

  const onDetailsClick = (_id) => {
    setPostId(_id);
    setShowDetails(true);
  };

  return (
    <div className="container">
      <div className="container">
        <div className="feature-posts">
          <a href="single-post.html" className="feature-post-item">
            <span>Featured Posts</span>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="/assets/imgs/icon1.png" className="w-100" alt="" />
            <div className="feature-post-caption">Baby Feeding</div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img
              src="/assets/imgs/icon2.png"
              className="w-100"
              alt="Baby Speeling"
            />
            <div className="feature-post-caption"> Baby Speeling</div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="/assets/imgs/icon3.png" className="w-100" alt="" />
            <div className="feature-post-caption"> Baby Loving </div>
          </a>
          <a href="single-post.html" className="feature-post-item">
            <img src="/assets/imgs/icon3.png" className="w-100" alt="" />
            <div className="feature-post-caption"> Baby Loving </div>
          </a>
        </div>

        <hr />
      </div>
      <hr />

      {showDetails && <Details postId={postId} onClose={onClose} />}

      <div className={styles["page-content"]}>
        {posts.map((x) => (
          <Card key={x._id} {...x} onDetailsClick={onDetailsClick} />
        ))}
        <hr />
      </div>
      <button className="btn btn-primary btn-block my-4">
        Load More Posts
      </button>
    </div>
  );
}
