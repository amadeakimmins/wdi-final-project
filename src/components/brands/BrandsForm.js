import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import BackButton from '../utility/BackButton';

function BrandsForm({ history, handleSubmit, handleChange, brand}) {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <BackButton history={history} />
        </Col>
        <Col md={12}>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <ControlLabel htmlFor="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                id="name"
                value={brand.name}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel>Select Categories</ControlLabel>
              <FormControl componentClass="select" multiple>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="men">Accessories</option>
                <option value="men">Beauty</option>
              </FormControl>

              <ControlLabel htmlFor="name">About Brand:</ControlLabel>
              <FormControl
                type="text"
                name="about"
                id="about"
                value={brand.about}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel htmlFor="name">Website Link:</ControlLabel>
              <FormControl
                type="text"
                name="website"
                id="website"
                value={brand.website}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel>Select Price Range</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="low">£</option>
                <option value="medium">££</option>
                <option value="high">£££</option>
                <option value="very-high">££££</option>
              </FormControl>

              <ControlLabel htmlFor="name">Main Image:</ControlLabel>
              <FormControl
                type="text"
                name="image1"
                id="image1"
                value={brand.image1}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel htmlFor="name">Product Image 2</ControlLabel>
              <FormControl
                type="text"
                name="image2"
                id="image2"
                value={brand.image2}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel htmlFor="name">Product Image 3</ControlLabel>
              <FormControl
                type="text"
                name="image3"
                id="image3"
                value={brand.image3}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel htmlFor="name">Product Image 4</ControlLabel>
              <FormControl
                type="text"
                name="image4"
                id="image4"
                value={brand.image4}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel htmlFor="name">Product Image 5</ControlLabel>
              <FormControl
                type="text"
                name="image5"
                id="image5"
                value={brand.image5}
                onChange={handleChange}
              >
              </FormControl>
            </FormGroup>
            <button>Save</button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
}


export default BrandsForm;
