import React from 'react';
import Axios from 'axios';

import BrandsForm from './BrandsForm';
import Auth from '../../lib/Auth';

class BrandsEdit extends React.Component {
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
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/brands/${this.props.match.params.id}`)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const brand = Object.assign({}, this.state.brand, { [name]: value });
    this.setState({ brand });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/brands/${this.props.match.params.id}`, this.state.brand,
        { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(res => this.props.history.push(`/brands/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <BrandsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        brand={this.state.brand}
      />
    );
  }
}

export default BrandsEdit;
