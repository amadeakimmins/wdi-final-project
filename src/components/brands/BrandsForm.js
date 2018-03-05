import React from 'react';

import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

import BackButton from '../utility/BackButton';

function BrandsForm({ history, handleSubmit, handleChange, brand, errors }) {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  console.log(brand);


  return (
    <Grid className="container">
      <Row>
        <Col md={12}>
          <BackButton history={history} />
        </Col>
        <Col md={12}>
          <form onSubmit={handleSubmit} className="container">
            <FormGroup>
              <ControlLabel htmlFor="name">Name:</ControlLabel>
              <FormControl
                type="text"
                name="name"
                className="input-bar textarea"
                id="name"
                value={brand.name}
                onChange={handleChange}
              >
              </FormControl>
              { errors.name && <p className="errors">{errors.name}</p>}

              <FormGroup>
                <ControlLabel>Select Categories:</ControlLabel>
                <Checkbox name="categories" value="women" onChange={handleChange} checked={brand.categories.indexOf('women') !== -1}>Women</Checkbox>
                <Checkbox name="categories" value="men" onChange={handleChange} checked={brand.categories.indexOf('men') !== -1}>Men</Checkbox>
                <Checkbox name="categories" value="accessories" onChange={handleChange} checked={brand.categories.indexOf('accessories') !== -1}>Accessories</Checkbox>
                <Checkbox name="categories" value="beauty" onChange={handleChange} checked={brand.categories.indexOf('beauty') !== -1}>Beauty</Checkbox>
              </FormGroup>

              { errors['categories.0'] && <p className="errors">{errors['categories.0']}</p>}

              <ControlLabel htmlFor="about">About:</ControlLabel>
              <FormControl
                type="text"
                name="about"
                className="input-bar textarea"
                id="about"
                value={brand.about}
                onChange={handleChange}
              >
              </FormControl>
              { errors.about && <p className="errors">{errors.about}</p>}

              <ControlLabel>Select Price Range</ControlLabel>
              <FormControl componentClass="select" className="input-bar" placeholder="select" name="priceRange" onChange={handleChange} value={brand.priceRange}>
                <option value="£">£</option>
                <option value="££">££</option>
                <option value="£££">£££</option>
                <option value="££££">££££</option>
              </FormControl>
              { errors.priceRange && <p className="errors">{errors.priceRange}</p>}

              <ControlLabel htmlFor="name">Website Link:</ControlLabel>
              <FormControl
                type="text"
                name="website"
                className="input-bar textarea"
                id="website"
                value={brand.website}
                onChange={handleChange}
              >
              </FormControl>
              { errors.website && <p className="errors">{errors.website}</p>}

              <ControlLabel htmlFor="name">Main Image:</ControlLabel>
              <FormControl
                type="text"
                name="image1"
                className="input-bar textarea"
                id="image1"
                value={brand.image1}
                onChange={handleChange}
              >
              </FormControl>
              { errors.image1 && <p className="errors">{errors.image1}</p>}

              <ControlLabel htmlFor="name">Product Image:</ControlLabel>
              <FormControl
                type="text"
                name="image2"
                className="input-bar textarea"
                id="image2"
                value={brand.image2}
                onChange={handleChange}
              >
              </FormControl>
              { errors.image2 && <p className="errors">{errors.image2}</p>}

              <ControlLabel htmlFor="name">Product Image:</ControlLabel>
              <FormControl
                type="text"
                name="image3"
                className="input-bar textarea"
                id="image3"
                value={brand.image3}
                onChange={handleChange}
              >
              </FormControl>
              { errors.image3 && <p className="errors">{errors.image3}</p>}

              <ControlLabel htmlFor="name">Product Image:</ControlLabel>
              <FormControl
                type="text"
                name="image4"
                className="input-bar textarea"
                id="image4"
                value={brand.image4}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel htmlFor="name">Product Image:</ControlLabel>
              <FormControl
                type="text"
                name="image5"
                className="input-bar textarea"
                id="image5"
                value={brand.image5}
                onChange={handleChange}
              >
              </FormControl>
            </FormGroup>
            <button disabled={formIsInvalid} className="main-button">Save</button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
}


export default BrandsForm;
