import React from 'react';
import Axios from 'axios';

import BrandsForm from './BrandsForm';
import Auth from '../../lib/Auth';

class BrandsNew extends React.Component {
  state = {
    brand: {
      name: '',
      categories: '',
      about: '',
      website: '',
      priceRange: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const brand = Object.assign({}, this.state.brand, { [name]: value });
    const errors  = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ brand, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/brands', this.state.brand, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(() => this.props.history.push('/brands'))
      .catch(err =>{
        this.setState({ errors: err.response.data.errors });
      });
  }

  render() {
    return (
      <BrandsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        brand={this.state.brand}
        handleImageUpload={this.state.handleImageUpload}
        errors={this.state.errors}
      />
    );
  }
}

export default BrandsNew;
