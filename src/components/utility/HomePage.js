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


{/* <p className="jumbotron-text">All Clothing brands are pushing for a more sustainable fashion industry aiming to remove fast fashion through creating products of quality using sustainable materials and having a more transparent supply-chain. </p>
<p className="jumbotron-text">All Beauty brands fight against animal testing and are using either already using all natural materials or are currently becoming all natural.</p> */}
