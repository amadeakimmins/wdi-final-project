import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Grid, Row, Col } from 'react-bootstrap';

import Auth from '../../lib/Auth';
import BrandsSearchBar from './BrandsSearchBar';

class BrandsIndex extends Component {
  state = {
    brands: [],
    sortBy: 'name',
    sortDirection: 'asc',
    query: ''
  }

  componentDidMount() {
    Axios
      .get('/api/brands')
      .then(res => this.setState({ brands: res.data }))
      .catch(err => console.log(err));
  }

  handleSort = (e) => {
    // console.log(e.target.value.split('|'));
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  handleSearch = (e) => {
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
  }

  sortingAndFiltering = () => {
    // console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
    const { sortBy, sortDirection, query } = this.state;

    const regex = new RegExp(query, 'i');

    const orderedBrands = _.orderBy(this.state.brands, [sortBy], [sortDirection]);

    const brands = _.filter(orderedBrands, (brand) => regex.test(brand.name));

    return brands;
  }

  render() {
    const brands = this.sortingAndFiltering();
    return (
      <Grid>
        <Row>
          <Col md={6}>
            { Auth.isAuthenticated() && <Link className="main-button" to="/brands/new">Suggest a Brand</Link> }
          </Col>
          <Col className="search-bar" md={6}>
            <BrandsSearchBar
              handleSort={this.handleSort}
              handleSearch={this.handleSearch}
            />
          </Col>
        </Row>
        <Row>
          { brands.map(brand => {
            return(
              <Col key={brand.id} xs={12} sm={6} md={4}>
                <Link to={`/brands/${brand.id}`}>
                  <div className="image-container">
                    <img src={brand.image1} className="img-responsive index-images" />
                  </div>
                  <p className="brand-title">{brand.name}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default BrandsIndex;
