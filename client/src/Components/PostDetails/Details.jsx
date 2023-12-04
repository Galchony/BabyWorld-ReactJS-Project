import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as postService from "../../services/postService";

import styles from "./Details.module.css";

export default function Details({ postId, onClose }) {
  const [post, setPost] = useState({});
  // const { postId } = useParams();
  const { onDelete, userId } = useContext(AuthContext);

  useEffect(() => {
    postService
      .getOne(postId)
      .then((result) => setPost(result))
      .catch((err) => console.log(err));
  }, [postId]);

  const isOwner = post._ownerId == userId;

  const onDeleteHandler = () => {
    onDelete(postId);
  };

  return (
    <div className={styles["overlay"]}>
      <div className={styles["backdrop"]} onClick={onClose}></div>
      <div className={styles["modal"]}>
        <div className={styles["detail-container"]}>
          <header className={styles["headers"]}>
            <h2>Post Detail</h2>
            <button className={styles["btn close"]} onClick={onClose}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <div className={styles["content"]}>
            <div className={styles["image-container"]}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className={styles["image"]}
              />
            </div>
            <div className={styles["user-details"]}>
              <h3>
                <strong>{post.title}</strong>
              </h3>
              <p>
                Category <strong>{post.category}</strong>
              </p>
              <p>
                
                <strong> {post.description} </strong>
              </p>
             
              <p>
                Phone Number: <strong>{post.title}</strong>
              </p>

              {isOwner && (
                <div className={styles.container}>
                  <button type="button" className={styles.btn}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={onDeleteHandler}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
