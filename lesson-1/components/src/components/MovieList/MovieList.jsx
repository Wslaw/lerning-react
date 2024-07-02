import React from 'react'
import styles from "./movie-list.modules.css"



const MovieList = ({ title, items }) => {
  const elements = items.map((item) => 
    <li key={item.id}>{item.title},{ item.year}</li>
  )
  return (
    <>
      <h3>{title}</h3>
      <ul className={styles.movieList}>
{elements}
      </ul>
    </>
  );
}

export default MovieList
