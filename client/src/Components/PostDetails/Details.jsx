import { useEffect, useState, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";

import reducer from "./commentReducer.js";
import * as postService from "../../services/postService";
import * as commentService from "../../services/commentService";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./Details.module.css";

export default function Details({ postId, onClose }) {
  const [post, setPost] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { userId, username, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    postService
      .getOne(postId)
      .then((result) => setPost(result))
      .catch((err) => console.log(err));

    commentService.getAll(postId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [postId]);

  const isOwner = post._ownerId == userId;

  const onDelete = async () => {
    try {
      const hasConfirmed = confirm(
        `Are you sure you want to delete ${post.title}`
      );
      if (hasConfirmed) {
        await postService.remove(postId, token);
        navigate("/catalog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(
      postId,
      values.comment,
      token
    );

    newComment.owner = { username };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    addCommentHandler
  );

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
            </div>
          </div>
          <div className={styles.container}>
            {isOwner && (
              <>
                <button type="button" className={styles.btn}>
                  Edit
                </button>
                <button type="button" className={styles.btn} onClick={onDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
          <div className={styles["details-comments"]}>
            <h2>Comments:</h2>
            <ul>
              {comments.map(({ _id, text, owner: { username } }) => (
                <li key={_id} className={styles["comment"]}>
                  <p>
                    {username}: {text}
                    <button type="button" >
                      Edit
                    </button>
                    <button
                      type="button"
                    >
                      Delete
                    </button>
                  </p>
                </li>
              ))}
            </ul>

            {comments.length === 0 && (
              <p className={styles["no-comment"]}>No comments.</p>
            )}
          </div>
          <article className={styles["create-comment"]}>
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
              <textarea
                name="comment"
                onChange={changeHandler}
                value={values.comment}
                placeholder="Comment......"
              ></textarea>
              <input className={styles["btn submit"]} type="submit" value="Add Comment" />
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}
