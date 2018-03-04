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
    categories: [],
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

  filtering = () => {
    const { categoryQuery, query } = this.state;

    const regex = new RegExp(query, 'i');

    const brandsFilteredBySearchQuery = _.filter(this.state.brands, (brand) => regex.test(brand.name));

    const brandsFilteredByCategoryQuery = _.filter(brandsFilteredBySearchQuery, (brand) => {
      if (!categoryQuery) return brand;
      return brand.categories.some(category => category === categoryQuery);
    });

    return brandsFilteredByCategoryQuery;
  }

  render() {
    const brands = this.filtering();
    return (
      <div>
        <hr className="horizontal-rule"/>
        <Grid className="container">
          <Row>
            <Col md={6} className="index-margin-button">
              { Auth.isAuthenticated() && <Link className="main-button" to="/brands/new">Suggest a Brand</Link> }
            </Col>
          </Row>
          <Row>
            <div className="input-bar">
              <BrandsSearchBar
                handleSort={this.handleCategory}
                handleSearch={this.handleSearch}
              />
            </div>
          </Row>
          <Row className="container">
            { brands.map(brand => {
              return(
                <Col key={brand.id} xs={12} sm={6} md={6} lg={4}>
                  <Link to={`/brands/${brand.id}`}>
                    <div className="image-container">
                      <img src={brand.image1} className="img-responsive index-images" />
                      <p className="brand-title">{brand.name}</p>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BrandsIndex;
