import React from 'react';
import ReactFilestack from 'filestack-react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function BrandsProducts({ handleSubmit, handleChange, product, handleImageUpload, apiKey, errors }) {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <ControlLabel htmlFor="name">Name</ControlLabel>
        <FormControl
          name="name"
          className="input-bar textarea"
          defaultValue={product.name}
          onChange={handleChange}
        >
        </FormControl>
        { errors.name && <p className="errors">{errors.name}</p>}

        <ControlLabel htmlFor="image">Image</ControlLabel>
        <ReactFilestack
          apikey={apiKey}
          buttonText="Upload a photo"
          buttonClass="main-button"
          onSuccess={handleImageUpload}
        />
        { product.name && <div className="product-container">
          <h2 className="subtitle">Image Preview:</h2>
          <img src={product.image} className="img-responsive image-preview" />
        </div> }

        <ControlLabel>Rating (5)</ControlLabel>
        <FormControl componentClass="select" className="input-bar" name="rating" onChange={handleChange}>
          <option value="★">★</option>
          <option value="★★">★★</option>
          <option value="★★★">★★★</option>
          <option value="★★★★">★★★★</option>
          <option value="★★★★★">★★★★★</option>
        </FormControl>
        { errors.rating && <p className="errors">{errors.rating}</p>}
        <button disabled={formIsInvalid} className="main-button">Submit</button>
      </FormGroup>
    </form>
  );
}

export default BrandsProducts;
