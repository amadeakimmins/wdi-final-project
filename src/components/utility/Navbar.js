import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar1 = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="navbar-item"><i className="fa fa-home"></i> Home</Link>
        {' '}
        <Link to="/brands" className="navbar-item"><i className="fa fa-shopping-bag"></i> Brands</Link>
        {' '}
        { !!Auth.isAuthenticated() && <Link to={'/users/' + Auth.getPayload().userId} className="navbar-item"><i className="fa fa-user"></i> Account</Link>}
        {' '}
        {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item"><i className="fa fa-sign-in"></i> Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
        {' '}
        { !!Auth.isAuthenticated() && <a href="#" className="navbar-item" onClick={logout}><i className="fa fa-sign-out"></i>Logout</a>}
      </nav>
    </div>
  );
};

export default withRouter(Navbar1);
