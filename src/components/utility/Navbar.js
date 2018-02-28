import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return (
    <nav className="navbar">
      {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
      {' '}
      { !!Auth.isAuthenticated() && <a href="#" className="navbar-item" onClick={logout}>Logout</a>}
    </nav>
  );
};

export default withRouter(Navbar);
