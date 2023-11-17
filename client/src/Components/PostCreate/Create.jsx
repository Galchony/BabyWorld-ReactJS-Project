import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as postService from "../../services/postService";

import styles from "./Create.module.css";

export default function Create() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: "",
    category: "",
    imageUrl: "",
    author: sessionStorage.getItem("token"),
    createdAt: new Date(),
    description: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    postService.create(values).catch((err) => console.log(err));
    navigate("/catalog");
  };

  return (
    <section id="create">
      <form method="POST" onSubmit={onClickHandler}>
        <div className={styles.container}>
          <h1>Create Your Post Here</h1>

          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={onChangeHandler}
            value={values.title}
          />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={onChangeHandler}
            value={values.category}
          />
          <label htmlFor="imageUrl">Image</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image"
            onChange={onChangeHandler}
            value={values.imageUrl}
          />
          <label htmlFor="description">Description</label>
          <div>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              onChange={onChangeHandler}
              value={values.description}
            />
          </div>

          <button className={styles.btn} type="submit">Create Post</button>
        </div>
      </form>
    </section>
  );
}
