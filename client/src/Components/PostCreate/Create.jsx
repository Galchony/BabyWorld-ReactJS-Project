import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import * as postService from "../../services/postService";

import styles from "./Create.module.css";

export default function Create() {
  const navigate = useNavigate();
  const { username,token } = useContext(AuthContext);

  const onCreateSubmit = async (values) => {
    try {
      await postService.create(values, token);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      imageUrl: "",
      author: username,
      createdAt: new Date(),
      description: "",
    },
    onCreateSubmit
  );

  return (
    <section id={styles["create-post"]}>
      <form method="POST" onSubmit={onSubmit}>
        <div className={styles.container}>
          <h1>Create Your Post Here</h1>

          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={changeHandler}
            value={values.title}
          />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={changeHandler}
            value={values.category}
          />
          <label htmlFor="imageUrl">Image</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image"
            onChange={changeHandler}
            value={values.imageUrl}
          />
          <label htmlFor="description">Description</label>
          <div>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              onChange={changeHandler}
              value={values.description}
            />
          </div>

          <button className={styles.btn} type="submit">
            Create Post
          </button>
        </div>
      </form>
    </section>
  );
}
