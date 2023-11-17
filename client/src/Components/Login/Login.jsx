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
    <section id={styles["login-page"]} className={styles["login-section"]}>
      <img src="/assets/imgs/log.jpg" alt="" />
      <form id={styles["login"]} onSubmit={onClick}>
        <div className={styles["container"]}>
          <div className={styles["brand-logo"]}></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={onChangeHandler}
            placeholder="exapmle@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={onChangeHandler}
            placeholder="*********"
          />
          <input type="submit" className={styles["btn"]} value="Login" />
        </div>
        <span>
          {" "}
          Go to <a href="/register">register</a>!
        </span>
      </form>
    </section>
  );
}
