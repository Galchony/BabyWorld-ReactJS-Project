import styles from "./Home.module.css";

import * as postService from "../../services/postService";
import * as userService from "../../services/userService";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  var text = $(".typewriter").text();

  var length = text.length;
  var timeOut;
  var character = 0;

  (function typeWriter() {
    timeOut = setTimeout(function () {
      character++;
      var type = text.substring(0, character);
      $(".typewriter").text(type);
      typeWriter();

      if (character == length) {
        clearTimeout(timeOut);
      }
    }, 150);
  })();
  return (
    <>
      <div id="wrapper">
        <header className="page-header"></header>
        <div className={styles.typewriter}>
          <h1>Welcome to Baby World!</h1>
        </div>

        <div className={styles["typewriter-1"]}>
          <h1>“The future depends on what we do  in the present!”</h1>
          
        </div>
      </div>
    </>
  );
}
