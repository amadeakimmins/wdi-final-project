import React from 'react';

import { Row, Col, FormControl } from 'react-bootstrap';

const SearchBar = ({ handleSort, handleSearch }) => {
  return(
    <div className="container">
      <form>
        <Row>
          <Col md={6}>
            <FormControl
              className="input-bar"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            >
            </FormControl>
          </Col>
          <Col md={6}>
            <FormControl componentClass="select" placeholder="select" className="input-bar" onChange={handleSort}>
              <option defaultValue="women">Filter...</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="accessories">Accessories</option>
              <option value="beauty">Beauty</option>
            </FormControl>
          </Col>
        </Row>
      </form>
    </div>

  );
};

export default SearchBar;
