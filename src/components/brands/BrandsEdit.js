import React from 'react';
import Axios from 'axios';

import BrandsForm from './BrandsForm';
import Auth from '../../lib/Auth';

class BrandsEdit extends React.Component {
  state = {
    brand: {
      name: '',
      categories: [],
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

  componentDidMount() {
    Axios
      .get(`/api/brands/${this.props.match.params.id}`)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target }) => {
    let brand = {};
    let errors = {};

    if (target.name === 'categories') {
      let categories = [];
      if (target.checked) {
        categories = [...this.state.brand.categories, target.value];
      } else {
        categories = this.state.brand.categories.filter(category => category !== target.value);
      }
      brand = Object.assign({}, this.state.brand, { categories });
      errors  = Object.assign({}, this.state.errors, { 'categories.0': ''});
    } else {
      brand = Object.assign({}, this.state.brand, { [target.name]: target.value });
      errors  = Object.assign({}, this.state.errors, { [target.name]: ''});
    }

    this.setState({ brand, errors }, () => console.log('state',this.state));
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
        errors={this.state.errors}
      />
    );
  }
}

export default BrandsEdit;
