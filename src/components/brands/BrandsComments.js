import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

function BrandsComments({ handleCommentSubmit, handleChange, comment }) {
  return (
    <form onSubmit={handleCommentSubmit}>
      <FormGroup>
        <FormControl
          name="text"
          className="textarea"
          value={comment.text}
          placeholder="What do you think of the brand?"
          onChange={handleChange}
        >
        </FormControl>
      </FormGroup>
      <FormGroup>
        <button>Post</button>
      </FormGroup>
    </form>
  );
}

export default BrandsComments;
