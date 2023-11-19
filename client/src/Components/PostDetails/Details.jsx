import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as postService from "../../services/postService";

import styles from "./Details.module.css";

export default function Details() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const { onDelete } = useContext(AuthContext);

  useEffect(() => {
    postService
      .getOne(postId)
      .then((result) => setPost(result))
      .catch((err) => console.log(err));
  }, [postId]);

  const onDeleteHandler = () => {
    onDelete(postId)
  };

  return (
    <section id="details">
      <h1>Post Details</h1>
      <div>
        <img src={post.imageUrl} alt={post.title} />
        <h3 className={styles.title}> {post.title}</h3>
        <p>Category: {post.category}</p>
      </div>

      <p>{post.description}</p>

      <div className={styles.container}>
        <button
          type="button"
          className={styles.buttons}
          onClick={onDeleteHandler}
        >
          Delete
        </button>
      </div>
    </section>
  );
}
