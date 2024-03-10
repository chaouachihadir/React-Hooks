import React, { useState } from "react";

import MovieList from "../MovieList/MovieList";

const Filter = ({ ratingChange, SearchInput,movieData }) => {
 
  var filtredMovie = movieData.filter(
    (movie) => movie.title.toLowerCase().includes(SearchInput .toLowerCase()) && movie.rating >= ratingChange
  );

  return <div>{<MovieList filtredMovie={filtredMovie} />}</div>;
};

export default Filter;
