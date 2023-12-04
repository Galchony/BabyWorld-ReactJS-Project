import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as postService from "../../services/postService";

import styles from "./Details.module.css";

export default function Details({ postId, onClose }) {
  const [post, setPost] = useState({});
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  // const { postId } = useParams();
  const { onDelete, userId, token } = useContext(AuthContext);

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

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const result = await postService.addComment(
      gameId,
      {
        username,
        comment,
      },
      token
    );

    setPost((state) => ({
      ...state,
      comments: { ...state.comments, [result._id]: result },
    }));
    setUsername("");
    setComment("");
  };

  return (
    <div className={styles["overlay"]}>
      <div className={styles["backdrop"]} onClick={onClose}></div>
      <div className={styles["modal"]}>
        <div className={styles["detail-container"]}>
          <header className={styles["headers"]}>
            <h2>{post.title}</h2>
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
                <strong></strong>
              </h3>
              <p>
                Category: <strong>{post.category}</strong>
              </p>
              <p>
                <strong>{post.author}</strong>
              </p>
              <p>
                <strong> {post.description} </strong>
              </p>

              <div className={styles.container}>
                {isOwner && (
                  <>
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
                  </>
                )}

                <div className="details-comments">
                  <h2>Comments:</h2>
                  <ul>
                    {post.comments &&
                      Object.values(post.comments).map((x) => (
                        <li key={x._id} className="comment">
                          <p>
                            {x.username}: {x.comment}
                          </p>
                        </li>
                      ))}
                  </ul>

                  {/* {!Object.values(game.comments).length && (
                        <p className="no-comment">No comments.</p>
                    )} */}
                </div>

                <article className="create-comment">
                  <label>Add new comment:</label>
                  <form className="form" onSubmit={onCommentSubmit}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                      name="comment"
                      placeholder="Comment......"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <input
                      className={styles.btn}
                      type="submit"
                      value="Add Comment"
                    />
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
