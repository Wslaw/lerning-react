import React from "react";
import styles from "./movie-list.module.css";
import MovieListItem from "./MovieListItem";

const MovieList = ({ title, items=[] }) => {
  // const elements = items.map((item) => <MovieListItem key={item.id} title={item.title} year={item.year} src={item.src} alt={item.alt} />);
  const elements = items.map(({id, ...other}) => <MovieListItem key={id} {...other} />);
  return (
    <>
     {title &&  <h3>{title}</h3>}
      <ul className={styles.movieList}>{elements}</ul>
    </>
  );
};

export default MovieList;
