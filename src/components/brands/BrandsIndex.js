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
    query: '',
    categoryQuery: ''
  }

  componentDidMount() {
    Axios
      .get('/api/brands')
      .then(res => this.setState({ brands: res.data }))
      .catch(err => console.log(err));
  }

  handleCategory = (e) => {
    this.setState({ categoryQuery: e.target.value });
  }

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  // sortingAndFiltering = () => {
  //   const { categoryQuery, query } = this.state;
  //   console.log(categoryQuery);
  //
  //   const regex = new RegExp(query, 'i');
  //   const categoryRegex = new RegExp(categoryQuery, 'i');
  //
  //   const brandsFilteredBySearchQuery = _.filter(this.state.brands, (brand) => regex.test(brand.name));
  //   // filter block of code that takes the brandsFilteredBySearchQuery and filters them by categoryQuery
  //   const brandsFilteredByCategoryQuery = _.filter(this,state.brands, (brand) )
  //
  //
  //
  //   return brands;
  // }

  render() {
    // const brands = this.sortingAndFiltering();
    return (
      <Grid className="container">
        <Row>
          <Col md={6}>
            { Auth.isAuthenticated() && <Link className="main-button" to="/brands/new">Suggest a Brand</Link> }
          </Col>
        </Row>
        <Row>
          <div className="input-bar">
            <BrandsSearchBar
              handleSort={this.handleSort}
              handleSearch={this.handleSearch}
            />
          </div>
        </Row>
        <Row className="container">
          { this.state.brands.map(brand => {
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
