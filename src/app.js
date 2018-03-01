import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import AuthenticationRoutes from './components/auth/AuthenticationRoutes';
import BrandsRoutes from './components/brands/BrandsRoutes';
import Navbar from './components/utility/Navbar';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
            <hr className="horizontal-rule"/>
            <h1 className="title"><Link className="title" to="/">sustain.</Link></h1>
            <hr className="horizontal-rule"/>
          </header>
          <main>
            <AuthenticationRoutes />
            <BrandsRoutes />
          </main>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
