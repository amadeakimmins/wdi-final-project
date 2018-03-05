import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

import { Grid, Row, Col } from 'react-bootstrap';

class ProfilePage extends Component {
  state = {
    brands: [],
    user: {
      email: '',
      fullname: '',
      username: ''
    },
    favorites: []
  }


  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(res => {

        this.setState({ user: res.data });
        console.log(this.state.user.favorites);
      })
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
          <Col md={6} className="profile-details">
            <h3 className="subtitle"><strong><em>User Details: </em></strong></h3>
            <br/>
            <p><strong><em>Name: </em></strong>{this.state.user.fullname}</p>
            <p><strong><em>User Details: </em></strong>{this.state.user.email}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3 className="subtitle"><strong><em>Favourite Brands: </em></strong></h3>
            <br/>
            <Row className="container">
              {this.state.user.username && this.state.user.favorites.map(favorite => {
                return(
                  <Col key={favorite.id} xs={12} sm={6} md={4}>
                    <Link to={`/brands/${favorite.id}`}>
                      <div className="image-container">
                        <img src={favorite.image1} className="img-responsive index-images" />
                        <p className="brand-title">{favorite.name}</p>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>


      </Grid>

    );
  }
}

export default ProfilePage;
