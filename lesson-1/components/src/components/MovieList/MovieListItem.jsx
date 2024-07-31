import React from "react";
import styles from "./movie-list.module.css";

const MovieListItem = ({ title, year, src, alt }) => {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={src} alt={alt} />
      <h4>{title}</h4>
      <p>{year}</p>
    </li>
  );
};

export default MovieListItem;
