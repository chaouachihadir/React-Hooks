import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

 const AddMovie = ({show, handleClose , newMovie,setNewMovie,handleSave}) => {
  

  const handleChange = (e)=> {
    setNewMovie({
      ...newMovie,
      [e.target.name]:e.target.value,
      
    });
  };
  
  
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
          
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label> Title</Form.Label>
        <Form.Control type="text" 
        name ='title' 
        placeholder="Put your title here" 
        onChange={handleChange}
         />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>description</Form.Label>
        <Form.Control as="textarea"  name='description'rows={3} 
        onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control type="text" name = 'posterUrl' placeholder="Put your posterUrl here" 
        onChange={handleChange}/>
        <Form.Group className="mb-3" >
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" name ='rating' placeholder="Put your rating here" 
        onChange={handleChange}/>
      </Form.Group>
      </Form.Group>
    </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default AddMovie;
