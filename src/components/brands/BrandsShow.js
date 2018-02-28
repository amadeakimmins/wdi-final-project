import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { Grid, Row, Col } from 'react-bootstrap';

// import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class BrandsShow extends React.Component {
  state = {
    brand: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/brands/${this.props.match.params.id}`)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  deleteBrand = () => {
    Axios
      .delete(`/api/brands/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/'))
      .catch(err =>console.log(err));
  }

  render() {
    return (
      <Grid>
        <h1>{this.state.brand.name}</h1>
        <Row>
          <Col md={6}>
            {/* MAKE INTO CAROUSEL */}
            <img src={this.state.brand.image2} className="img-responsive"/>
          </Col>
          <Col md={6}>
            <p><strong>Categories:</strong> {this.state.brand.categories}</p>
            <p><strong>About:</strong> {this.state.brand.about}</p>
            <p><strong>Price:</strong>{this.state.brand.priceRange}</p>
            <p>{this.state.brand.website}</p>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default BrandsShow;
