import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./style.css"
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <>
        <Card style={{ width: "18rem" }} className="movie-card">
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description} </Card.Text>
            <div className="stars-container">
              <ReactStars
                count={5}
                value={movie.rating}
                //onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <Link to ={`/movie-details/${movie.id}`}>
              <Button variant="primary">Movie Trailer</Button>
              </Link>
            </div>

            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
      </>
    </div>
  );
};
export default MovieCard;
