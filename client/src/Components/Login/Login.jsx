import { useState } from "react";
import styles from "./Login.module.css";

export default function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onClick = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <section id={styles["login-page"]}>
      <img
        className={styles["img"]}
        src="/assets/imgs/log.jpg"
        alt="loginImg"
      />
      <form onSubmit={onClick}>
        <div className={styles["container"]}>
          <div className={styles["brand-logo"]}></div>
          <h1>Account Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="emails"
            name="email"
            value={values.email}
            onChange={onChangeHandler}
            placeholder="exapmle@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="passwords"
            name="password"
            value={values.password}
            onChange={onChangeHandler}
            placeholder="*********"
          />
          <button type="submit" className={styles["btn"]}>
            Login
          </button>
        </div>
        <hr />
        <span>
          Don't have an account? <a href="/register">Register</a> here!
        </span>
      </form>
    </section>
  );
}
