import React    from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Auth from './lib/Auth';

import AuthenticationRoutes from './components/auth/AuthenticationRoutes';
import BrandsRoutes from './components/brands/BrandsRoutes';
import Navbar from './components/utility/Navbar';

// import Gilroy from './fonts/Gilroy-Light.otf';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {

  state = {
    isLoggedIn: null
  }

  componentDidMount() {
    if (!Auth.isAuthenticated()) return false;

    Axios
      .get(`/api/users/${Auth.getPayload().userId}`,  { headers: { 'Authorization': `Bearer ${Auth.getToken()}`} })
      .then(() => this.setState({ isLoggedIn: true }))
      .catch(() => {
        Auth.logout();
        this.setState({ isLoggedIn: false });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
            <hr className="horizontal-rule"/>
            <h1 className="title"><Link className="title" to="/">sustain.</Link></h1>
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
