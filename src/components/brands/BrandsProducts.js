import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function BrandsProducts({ handleSubmit, handleChange, product }) {
  return (
    <form onSubmit={handleSubmit}>
      <p className="subtitle"><strong><em>Recommend a Product: </em></strong></p>
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
        <FormControl componentClass="select" className="input-bar" name="rating" onChange={handleChange}>
          <option value="⭐️">⭐️</option>
          <option value="⭐️⭐️">⭐️⭐️</option>
          <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
          <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
          <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
        </FormControl>
        <button className="main-button">Submit</button>
      </FormGroup>
    </form>
  );
}

export default BrandsProducts;
