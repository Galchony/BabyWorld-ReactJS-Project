import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import styles from "./Register.module.css";

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      username: "",
      password: "",
      repeatPassword:"",
    },
    onRegisterSubmit
  );

  return (
    <section id={styles["register-page"]}>
      <img src="/assets/imgs/welcome.png" className={styles["img"]} alt="register" />
      <form  onSubmit={onSubmit}>
        <div className={styles["container"]}>
          <div className={styles["icon"]}></div>
          <h1>Create your account here!</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            onChange={changeHandler}
            value={values.username}
            placeholder="Username"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
            value={values.email}
            placeholder="exapmle@gmail.com"
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            value={values.password}
            placeholder="*********"
          />
          <label htmlFor="repeatPassword">Repeat password:</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            onChange={changeHandler}
            value={values.password}
            placeholder="*********"
          />
          <button type="submit" className={styles["btn"]}>
            Register
          </button>{" "}
        </div>
      </form>
    </section>
  );
}
