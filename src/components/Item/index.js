import placeholder from "../../assets/placeholder.png";

import styles from "./styles.module.css";
export default function Item({ title }) {
  return (
    <>
      <div className={styles.Item}>
        <h4>{title}</h4>
        <img src={placeholder} alt='movies' />
      </div>
    </>
  );
}
