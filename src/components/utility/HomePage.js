import React from 'react';
import { Link } from 'react-router-dom';
//
// import Auth from '../../lib/Auth';

import { Jumbotron, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Jumbotron className="jumbotron">
      <div className="jumbotron-container">
        <p className="jumbotron-text">Sustainable and Ethical Fashion Brands for the <strong><em>Conscious Shopper</em></strong>.</p>
        <p className="jumbotron-text">
          <Button className="jumbotron-button"><Link to="/brands">Browse now</Link></Button>
        </p>
      </div>
    </Jumbotron>


  );
};

export default HomePage;
