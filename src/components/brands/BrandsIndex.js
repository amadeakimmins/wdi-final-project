import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';

// import Auth from '../../lib/Auth';

class BrandsIndex extends Component {
  state = {
    brands: []
  }

  componentDidMount() {
    Axios
      .get('/api/brands')
      .then(res => this.setState({ brands: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid>
        <Row>
          { this.state.brands.map(brand => {
            return(
              <Col key={brand.id} xs={12} sm={6} md={4}>
                <Link to={`/brands/${brand.id}`}>
                  <div className="image-container">
                    <img src={brand.image1} className="img-responsive index-images" />
                  </div>
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
