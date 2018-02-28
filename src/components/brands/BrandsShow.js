import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Slider from 'react-slick';

import { Grid, Row, Col } from 'react-bootstrap';

import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import BrandsComments from './BrandsComments';
import BrandsProducts from './BrandsProducts';

class BrandsShow extends React.Component {
  state = {
    brand: {},
    comment: {
      text: ''
    },
    product: {
      name: '',
      image: '',
      rating: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/brands/${this.props.match.params.id}`)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    console.log(value);
    const comment = Object.assign({}, this.state.comment, { [name]: value });
    this.setState({ comment }, () => console.log(this.state));
  }

  // comments
  handleCommentSubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/brands/${this.props.match.params.id}/comments`, this.state.comment, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        const brand = Object.assign({}, this.state.brand, { comments: res.data.comments });
        this.setState({ brand, comment: { text: ''} }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  deleteComment = (id) => {
    Axios
      .delete(`/api/brands/${this.props.match.params.id}/comments/${id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then((res) => this.setState({ brand: res.data }))
      .catch(err =>console.log(err));
  }

  // products
  handleProductSubmit = (e) => {
    e.preventDefault();
    Axios
      .post(`/api/brands/${this.props.match.params.id}/products`, this.state.product, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        const brand = Object.assign({}, this.state.brand, { products: res.data.products });
        this.setState({ brand, product: { text: ''} }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  deleteProduct = (id) => {
    Axios
      .delete(`/api/brands/${this.props.match.params.id}/products/${id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then((res) => this.setState({ brand: res.data }))
      .catch(err =>console.log(err));
  }

  // brands
  deleteBrand = () => {
    Axios
      .delete(`/api/brands/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/'))
      .catch(err =>console.log(err));
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      pauseOnHover: true,
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

            {/* MAKE IT SO ONLY ADMIN CAN DELETE */}
            { Auth.isAuthenticated() &&
            <button  onClick={this.deleteBrand}>
            Delete
            </button>}
            { Auth.isAuthenticated() && <Link to={`/brands/${this.state.brand.id}/edit`} >
            Edit
            </Link> }

            {/* comments */}
            <BrandsComments
              history={this.props.history}
              handleCommentSubmit={this.handleCommentSubmit}
              handleChange={this.handleChange}
              brand={this.state.brand}
              comment={this.state.comment}
            />
            <ul>
              { this.state.brand.name && this.state.brand.comments.map(comment =>
                <li key={comment.id}>
                  {comment.text}
                  <button onClick={() =>  this.deleteComment(comment.id)}>
                  Delete
                  </button>
                </li>

              )}
            </ul>
          </Col>
        </Row>
        <Row>
          {/* HIDE UNTIL BUTTON IS CLICKED */}
          <Col md={12}>
            <BrandsProducts
              history={this.props.history}
              handleProductSubmit={this.handleProductSubmit}
              handleChange={this.handleChange}
              brand={this.state.brand}
              product={this.state.product}
            />
            {/* { this.state.brand.name && this.state.brand.products.map(product =>
              <div>
                <p key={product.id}>
                  {product.name}
                </p>
                <img src={product.image}/>
                <p>{product.rating}</p>
                <button onClick={() =>  this.deleteComment(product.id)}>
                Delete
                </button>
              </div>
            )} */}
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default BrandsShow;
