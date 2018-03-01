import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';

class ProfilePage extends Component {
  state = {
    user: {
      email: '',
      fullname: '',
      username: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }), () => console.log(this.state.user))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid>
        <hr className="horizontal-rule"/>
        <Row className="container">
          <h1 className="welcome">Welcome, {this.state.user.username}</h1>
        </Row>
        <br/>
        <Row>
          <Col className="detail-container" md={6}>
            <h3 className="subtitle"><strong><em>User Details: </em></strong></h3>
            <br/>
            <p><strong><em>Name: </em></strong>{this.state.user.fullname}</p>
            <p><strong><em>User Details: </em></strong>{this.state.user.email}</p>
          </Col>
          <Col md={6}>
            <h3 className="subtitle"><strong><em>Favourite Brands: </em></strong></h3>
            <br/>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default ProfilePage;
