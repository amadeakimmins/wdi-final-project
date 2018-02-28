import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import AuthenticationRoutes from './components/auth/AuthenticationRoutes';
import BrandsRoutes from './components/brands/BrandsRoutes';
import Navbar from './components/utility/Navbar';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
            <h1><Link to="/">sustain.</Link></h1>
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
