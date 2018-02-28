import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function BrandsProducts({ handleProductSubmit, handleChange, product }) {
  return (
    <form onSubmit={handleProductSubmit}>
      <p><strong><em>Recommend a Product: </em></strong></p>
      <FormGroup>
        <ControlLabel htmlFor="name">Name</ControlLabel>
        <FormControl
          name="name"
          className="input-bar textarea"
          defaultValue={product.name}
          onChange={handleChange}
        >
        </FormControl>

        <ControlLabel htmlFor="image">Image</ControlLabel>
        <FormControl
          name="image"
          className="input-bar textarea"
          defaultValue={product.image}
          onChange={handleChange}
        >
        </FormControl>

        <ControlLabel>Rating (5)</ControlLabel>
        <FormControl componentClass="select" className="input-bar" name="rating">
          <option value="1">⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
        </FormControl>
        <button className="main-button">Submit</button>
      </FormGroup>
    </form>
  );
}

export default BrandsProducts;
