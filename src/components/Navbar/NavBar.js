import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddMovie from "../AddMovie/AddMovie";
import { Link } from "react-router-dom";

const NavBar = ({
  setRatingChange,
  setSearchInput,
  ratingChange,
  newMovie,
  setNewMovie,
  handleSave,
  handleClose,
  show,
  setShow,
}) => {

  

  const ratingChanged = (rating) => {
    setRatingChange(rating);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="dark align-items-baseline" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie APP</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link><Link to ="/">Home</Link></Nav.Link>
           
           
            <Nav.Link >  <Link to ="/movies-details">Movie Details</Link></Nav.Link>
            
            <Button variant="light" onClick={handleShow}>
              Add New Movie
            </Button>
            {""}
          </Nav>
        </Container>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
            onChange={handleChange}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <ReactStars
            count={5}
            value={ratingChange}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </InputGroup>
        {""}
      </Navbar>
      <AddMovie
        show={show}
        handleClose={handleClose}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        handleSave={handleSave}
      />
    </div>
  );
};
export default NavBar;
