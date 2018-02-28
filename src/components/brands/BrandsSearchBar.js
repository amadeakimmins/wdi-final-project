import React from 'react';

import { Col, FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ handleSearch }) => {
  return(
    <div>
      {/* <form className="col-md-6">
        <div className="form-group">
          <select onChange={handleSort}>
            <option value="name|asc">Make (A -Z)</option>
            <option value="name|desc">Make (Z - A)</option>
          </select>
        </div>
      </form> */}
      <form>
        <Col md={6}>
          <FormGroup>
            <FormControl
              className="search-bar"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            >
            </FormControl>
          </FormGroup>
        </Col>
      </form>
    </div>

  );
};

export default SearchBar;
