import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

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
      </FormGroup>
      <FormGroup>
        <button className="main-button">Post</button>
      </FormGroup>
    </form>
  );
}

export default BrandsComments;
