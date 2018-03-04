import React from 'react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit} className="container">

      { errors.passwordConfirmation && <p className="errors">{errors.passwordConfirmation}</p>}

      { errors.emailUnique && <p className="errors">{errors.emailUnique}</p>}

      <FormGroup>
        <ControlLabel htmlFor="fullname">fullname</ControlLabel>
        <FormControl
          name="fullname"
          type="fullname"
          className="input-bar textarea"
          defaultValue={user.fullname}
          onChange={handleChange}
        >
        </FormControl>
        { errors.fullname && <p className="errors">{errors.fullname}</p>}

        <ControlLabel htmlFor="username">Username</ControlLabel>
        <FormControl
          name="username"
          type="username"
          className="input-bar textarea"
          defaultValue={user.username}
          onChange={handleChange}
        >
        </FormControl>
        { errors.username && <p className="errors">{errors.username}</p>}

        <ControlLabel htmlFor="email">Email</ControlLabel>
        <FormControl
          name="email"
          type="email"
          className="input-bar textarea"
          defaultValue={user.email}
          onChange={handleChange}
        >
        </FormControl>
        { errors.email && <p className="errors">{errors.email}</p>}

        <ControlLabel htmlFor="password">Password</ControlLabel>
        <FormControl
          name="password"
          type="password"
          className="input-bar textarea"
          defaultValue={user.password}
          onChange={handleChange}
        >
        </FormControl>
        { errors.password && <p className="errors">{errors.password}</p>}

        <ControlLabel htmlFor="passwordConfirmation">Password Confirmation</ControlLabel>
        <FormControl
          name="passwordConfirmation"
          type="passwordConfirmation"
          className="input-bar textarea"
          defaultValue={user.passwordConfirmation}
          onChange={handleChange}
        >
        </FormControl>
        { errors.passwordConfirmation && <p className="errors">{errors.passwordConfirmation}</p>}
      </FormGroup>
      <button disabled={formIsInvalid} className="main-button">Register</button>
    </form>
  );
};

export default RegisterForm;
