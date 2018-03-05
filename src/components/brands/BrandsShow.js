import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Slider from 'react-slick';

import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import BrandsComments from './BrandsComments';
import BrandsProducts from './BrandsProducts';

class BrandsShow extends React.Component {
  state = {
    user: {},
    brand: {
      categories: []
    },
    comment: {
      text: ''
    },
    product: {
      name: '',
      image: '',
      rating: ''
    },
    favorites: [],
    apiKey: process.env.FILESTACK_API_KEY,
    errors: {}
  }


  // BRANDS
  componentDidMount() {
    console.log(this.state.categories);
    Axios
      .get(`/api/brands/${this.props.match.params.id}`)
      .then(res => this.setState({ brand: res.data }))
      .catch(err => console.log(err));
  }

  deleteBrand = () => {
    Axios
      .delete(`/api/brands/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/brands'))
      .catch(err => console.log(err));
  }

  // COMMENTS //
  handleChange = ({ target: { name, value } }) => {
    const comment = Object.assign({}, this.state.comment, { [name]: value });
    this.setState({ comment }, () => console.log(this.state));
  }

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

  // PRODUCTS //
  handleProductChange = ({ target: { name, value } }) => {
    console.log(value);
    const product = Object.assign({}, this.state.product, { [name]: value });
    const errors  = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ product, errors });
  }

  handleImageUpload = result => {
    const product = Object.assign({}, this.state.product, { image: result.filesUploaded[0].url});
    this.setState({ product }), () => console.log(product);
  }

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

  // FAVOURITES //
  handleFavouriteSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/brands/${this.props.match.params.id}/favorites`, {}, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then((res) => this.setState({ favorites: res.data.favorites }, () => console.log(res.data.favorites)))
      .catch(err => console.log(err));
  }

  deleteFavourite = (id) => {
    Axios
      .delete(`/api/brands/${this.props.match.params.id}/favorites/${id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then((res) => this.setState({ favorites: res.data }, () => console.log(res.data)))
      .catch(err => console.log(err));
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
      <div>
        <Grid className="container">
          <hr className="horizontal-rule"/>
          <BackButton history={this.props.history} />

          {/* IMAGE AND OTHER INFO */}
          <h1 className="show-title">{this.state.brand.name}</h1>
          <Row>
            <Col md={6}>
              <Col className="show-container" >
                <Slider className="slider" {...settings}>
                  <div><img width="300" height="400" alt="600x300" src={this.state.brand.image2} /></div>
                  <div><img width="300" height="400" alt="600x300" src={this.state.brand.image3} /></div>
                  <div><img width="300" height="400" alt="600x300" src={this.state.brand.image4} /></div>
                  <div><img width="300" height="400" alt="600x300" src={this.state.brand.image5} /></div>
                </Slider>
              </Col>
              <p className="subtitle"><strong><em>Categories:</em></strong></p>
              {this.state.brand.categories.map((category, index) =>
                <p key={index}>{category}</p>
              )}
              <p className="subtitle"><strong><em>Price: </em></strong>{this.state.brand.priceRange}</p>
              <p><a className="show-link" href={this.state.brand.website}><strong>Visit the website</strong></a></p>
              {/* MAKE IT SO ONLY ADMIN CAN DELETE */}
              { Auth.isAuthenticated() &&
              <button className="main-button" onClick={this.deleteBrand}>
              Delete
              </button>}
              { Auth.isAuthenticated() && <Link className="main-button" to={`/brands/${this.state.brand.id}/edit`} >
              Edit
              </Link> }
            </Col>

            {/* ABOUT BRAND */}
            <Col md={6} className="show-margin">
              <p className="subtitle"><strong><em>About: </em></strong></p>
              <p>{this.state.brand.about}</p>

              {/* FAVORITES */}
              { Auth.isAuthenticated() &&
                this.state.brand.favorites &&
                this.state.brand.favorites.every(favorite => favorite !== Auth.getPayload().userId) &&
                <button onClick={this.handleFavouriteSubmit} className="main-button margin-button">Favourite</button>
              }
              { Auth.isAuthenticated() &&
                this.state.brand.favorites &&
                this.state.brand.favorites.some(favorite => favorite === Auth.getPayload().userId) &&
                <button className="main-button" onClick={this.deleteFavourite}>Unfavourite</button>
              }

              {/* COMMENTS */}
              <p className="subtitle"><strong><em>Comments: </em></strong></p>
              { Auth.isAuthenticated() && <BrandsComments
                history={this.props.history}
                handleCommentSubmit={this.handleCommentSubmit}
                handleChange={this.handleChange}
                brand={this.state.brand}
                comment={this.state.comment}
              /> }
              { this.state.brand.name && this.state.brand.comments.map(comment =>
                <li className="comments" key={comment.id}>
                  <strong>{comment.createdBy.username} - </strong>{comment.text}
                  { Auth.isAuthenticated() && <button className="main-button" onClick={() =>  this.deleteComment(comment.id)}>
                  Delete
                  </button>}
                </li>
              )}
            </Col>
          </Row>
          <hr className="horizontal-rule"/>

          {/* SUGGEST PRODUCTS */}

          <Row>
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
              <Tab eventKey={1} className="subtitle" title="Recommend a Product">
                { Auth.isAuthenticated() &&  <BrandsProducts
                  history={this.props.history}
                  handleSubmit={this.handleProductSubmit}
                  handleChange={this.handleProductChange}
                  brand={this.state.brand}
                  product={this.state.product}
                  handleImageUpload={this.handleImageUpload}
                  apiKey={this.state.apiKey}
                  errors={this.state.errors}
                /> }
              </Tab>
              {' '}
              <Tab eventKey={2} title="Recommended Products">
                <p className="subtitle"><strong><em>
                  Recommended Products
                </em></strong></p>
                <Row>
                  { this.state.brand.name && this.state.brand.products.map(product =>
                    <Col key={product.id} xs={12} sm={6} md={3}>
                      <p><strong><em>
                        {product.name}
                      </em></strong></p>
                      <img className="product-container" src={product.image}/>
                      <p><strong><em>Rating: </em></strong>{product.rating}</p>
                      <button className="main-button" onClick={() =>  this.deleteProduct(product.id)}>
                      Delete
                      </button>
                    </Col>
                  )}
                </Row>
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BrandsShow;
