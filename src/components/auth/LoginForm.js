import React from 'react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <form onSubmit={handleSubmit} className="container">
      <FormGroup>
        <ControlLabel htmlFor="email">Email</ControlLabel>
        <FormControl
          name="email"
          type="email"
          className="input-bar textarea"
          defaultValue={user.email}
          onChange={handleChange}
        >
        </FormControl>
        
        <ControlLabel htmlFor="password">Password</ControlLabel>
        <FormControl
          name="password"
          type="password"
          className="input-bar textarea"
          defaultValue={user.password}
          onChange={handleChange}
        >
        </FormControl>
        { errors.message && <p className="errors">{errors.message}</p>}
      </FormGroup>
      <button className="main-button">Login</button>
    </form>
  );
};

export default LoginForm;
