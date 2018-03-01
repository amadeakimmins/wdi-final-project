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
        {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item"><i className="fa fa-sign-in"></i> Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
        {' '}
        <Link to="/" className="navbar-item"><i className="fa fa-home"></i> Home</Link>
        {' '}
        <Link to="/brands" className="navbar-item"><i className="fa fa-shopping-bag"></i> Brands</Link>
        {' '}
        { !!Auth.isAuthenticated() && <Link to={'/users/' + Auth.getPayload().userId} className="navbar-item"><i className="fa fa-user"></i> Account</Link>}
        {' '}
        { !!Auth.isAuthenticated() && <a href="#" className="navbar-item" onClick={logout}><i className="fa fa-sign-out"></i>Logout</a>}
      </nav>
    </div>



    // <Navbar inverse collapseOnSelect>
    //   <Navbar.Header>
    //     <Navbar.Brand>
    //       <a href="/">sustain.</a>
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //   </Navbar.Header>
    //   <Navbar.Collapse>
    //     <Nav>
    //       <NavItem eventKey={1} href="#">
    //         Link
    //       </NavItem>
    //       <NavItem eventKey={2} href="#">
    //         Link
    //       </NavItem>
    //       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    //         <MenuItem eventKey={3.1}>Action</MenuItem>
    //         <MenuItem eventKey={3.2}>Another action</MenuItem>
    //         <MenuItem eventKey={3.3}>Something else here</MenuItem>
    //         <MenuItem divider />
    //         <MenuItem eventKey={3.3}>Separated link</MenuItem>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav pullRight>
    //       <NavItem eventKey={1} href="#">
    //         Link Right
    //       </NavItem>
    //       <NavItem eventKey={2} href="#">
    //         Link Right
    //       </NavItem>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default withRouter(Navbar1);
