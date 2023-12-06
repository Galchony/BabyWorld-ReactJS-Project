import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import styles from "./Login.module.css";

export default function Login() {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  return (
    <section id={styles["login-page"]}>
      <img
        className={styles["img"]}
        src="/assets/imgs/log.jpg"
        alt="loginImg"
      />
      <form onSubmit={onSubmit}>
        <div className={styles["container"]}>
          <div className={styles["icon"]}></div>
          <h1>Account Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="emails"
            name="email"
            onChange={changeHandler}
            value={values.email}
            placeholder="exapmle@gmail.com"
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="passwords"
            name="password"
            onChange={changeHandler}
            value={values.password}
            placeholder="*********"
          />
          <button type="submit" className={styles["btn"]}>
            Login
          </button>
        </div>  
        <hr />
        <span>
          Don't have an account? <Link to="/register">Register</Link> here!
        </span>
      </form>
    </section>
  );
}
