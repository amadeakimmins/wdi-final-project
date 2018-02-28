import React from 'react';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import Slider from 'react-slick';

import { Grid, Row, Col } from 'react-bootstrap';

// import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import BrandsComments from './BrandsComments';

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

  // deleteBrand = () => {
  //   Axios
  //     .delete(`/api/brands/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
  //     .then(() => this.props.history.push('/'))
  //     .catch(err =>console.log(err));
  // }
  

  render() {
    var settings = {
      dots: true,
      // arrows: true,
      infinite: true,
      pauseOnHover: true,
      // responsive: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
      <Grid>
        <BackButton history={this.props.history} />
        <h1>{this.state.brand.name}</h1>
        <Row>
          <Col md={6}>
            <Slider {...settings}>
              <div><img width="300" height="400" alt="600x300" src={this.state.brand.image2} /></div>
              <div><img width="300" height="400" alt="600x300" src={this.state.brand.image3} /></div>
              <div><img width="300" height="400" alt="600x300" src={this.state.brand.image4} /></div>
              <div><img width="300" height="400" alt="600x300" src={this.state.brand.image5} /></div>
            </Slider>
          </Col>
          <Col md={6}>
            <p><strong>Categories:</strong> {this.state.brand.categories}</p>
            <p><strong>About:</strong> {this.state.brand.about}</p>
            <p><strong>Price: </strong>{this.state.brand.priceRange}</p>
            <p><a href={this.state.brand.website}>Visit the website</a></p>
            <BrandsComments />
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default BrandsShow;
