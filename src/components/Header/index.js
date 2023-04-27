import React from "react";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h3>DEMO Streaming</h3>
        <div className={styles.rightButtons}>
          <span>
            <p>Log in</p>
          </span>
          <span>
            <p>Start your free trial</p>
          </span>
        </div>
        <div className={styles.subHeader}>
          <h3>Popular titles</h3>
        </div>
      </div>
    </div>
  );
}
