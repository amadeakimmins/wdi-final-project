import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

import { Grid, Row, Col } from 'react-bootstrap';

// import Auth from '../../lib/Auth';

class ProfilePage extends Component {
  state = {
    user: {
      email: '',
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
          <h1>Welcome, {this.state.user.username}</h1>
          <h3><strong><em>User Deteails: </em></strong></h3>
        </Row>
      </Grid>

    );
  }
}

export default ProfilePage;
