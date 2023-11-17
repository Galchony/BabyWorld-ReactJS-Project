import styles from "./Register.module.css";

export default function Register() {
  return (
    <section id={styles["register-page"]} className={styles["login-section"]}>
    <img src="/assets/imgs/log.jpg" alt="" />
    <form id={styles["login"]}>
      <div className={styles["container"]}>
        <div className={styles["brand-logo"]}></div>
        <h1>Register</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="exapmle@gmail.com"
        />

        <label htmlFor="login-pass">Password:</label>
        <input type="password" id="password" name="password" placeholder="*********"/>
        <input type="submit" className={styles["btn"]} value="Login" />

      </div>
    </form>
  </section>
  );
}
