import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function BrandsComments({ handleCommentSubmit, handleChange, comment }) {
  return (
    <form onSubmit={handleCommentSubmit}>
      <FormGroup>
        <FormControl
          name="text"
          className="textarea input-bar"
          value={comment.text}
          placeholder="What do you think of the brand?"
          onChange={handleChange}
        >
        </FormControl>
        <ControlLabel>Rating (5)</ControlLabel>
        <FormControl componentClass="select" className="input-bar" name="rating" onChange={handleChange}>
          <option value="★">★</option>★
          <option value="★★">★★</option>
          <option value="★★★">★★★</option>
          <option value="★★★★">★★★★</option>
          <option value="★★★★★">★★★★★</option>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <button className="main-button">Post</button>
      </FormGroup>
    </form>
  );
}

export default BrandsComments;
