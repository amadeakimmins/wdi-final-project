import React from 'react';

import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

import BackButton from '../utility/BackButton';

function BrandsForm({ history, handleSubmit, handleChange, brand, errors }) {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <Grid className="container">
      <Row>
        <Col md={12}>
          <BackButton history={history} />
        </Col>
        <Col md={12}>
          <form onSubmit={handleSubmit} className="container">
            <FormGroup>
              <ControlLabel className="form-title" htmlFor="name"><strong><em>Name:</em></strong></ControlLabel>
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
                <ControlLabel className="form-title"><strong><em>Select Categories:</em></strong></ControlLabel>
                <Checkbox value="women">Women</Checkbox>
                <Checkbox value="men">Men</Checkbox>
                <Checkbox value="accessories">Accessories</Checkbox>
                <Checkbox value="beauty">Beauty</Checkbox>
              </FormGroup>

              {/* <ControlLabel>Select Categories</ControlLabel>
              <FormControl componentClass="select">
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="men">Accessories</option>
                <option value="men">Beauty</option>
              </FormControl> */}
              { errors.categories && <p className="errors">{errors.categories}</p>}

              <ControlLabel className="form-title" htmlFor="about"><strong><em>About:</em></strong></ControlLabel>
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

              <ControlLabel className="form-title" htmlFor="name"><strong><em>Website Link:</em></strong></ControlLabel>
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

              <ControlLabel className="form-title"><strong><em>Select Price Range</em></strong></ControlLabel>
              <FormControl componentClass="select" className="input-bar" placeholder="select">
                <option value="low">£</option>
                <option value="medium">££</option>
                <option value="high">£££</option>
                <option value="very-high">££££</option>
              </FormControl>
              { errors.priceRange && <p className="errors">{errors.priceRange}</p>}

              <ControlLabel className="form-title" htmlFor="name"><strong><em>Main Image:</em></strong></ControlLabel>
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

              <ControlLabel className="form-title" htmlFor="name"><strong><em>Product Image:</em></strong></ControlLabel>
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

              <ControlLabel className="form-title" htmlFor="name"><strong><em>Product Image:</em></strong></ControlLabel>
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

              <ControlLabel className="form-title" htmlFor="name"><strong><em>Product Image:</em></strong></ControlLabel>
              <FormControl
                type="text"
                name="image4"
                className="input-bar textarea"
                id="image4"
                value={brand.image4}
                onChange={handleChange}
              >
              </FormControl>

              <ControlLabel className="form-title" htmlFor="name"><strong><em>Product Image:</em></strong></ControlLabel>
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
