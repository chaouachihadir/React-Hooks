import React from 'react'
import { useParams } from 'react-router-dom';

 const MovieDetails = ({movieData}) => {
    const {movieId} = useParams()
   /* console.log(movieId)*/
   const findMovie=movieData.find((movie,index)=> movie.id==movieId);
  return (
    <div>
      <h1> {findMovie.title}</h1>
      <img src ={findMovie.posterUrl} alt ="posterUrl"/>
      <p>{findMovie.description}</p>
      <p> Rating:{findMovie.rating}</p>
      <iframe width="560" 
      height="315" 
      src={findMovie.trailer}></iframe>
      
      
      </div>
  )
  
  
  
};
export default MovieDetails;

