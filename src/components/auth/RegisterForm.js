import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit} className="container">
      { errors.passwordConfirmation && <p className="errors">{errors.passwordConfirmation}</p>}

      { errors.emailUnique && <p className="errors">{errors.emailUnique}</p>}


      <div className="form-group">
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={handleChange}
          value={user.fullname}
          className="form-control"
        />
        { errors.fullname && <p className="errors">{errors.fullname}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="form-control"
        />
        { errors.username && <p className="errors">{errors.username}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
        { errors.email && <p className="errors">{errors.email}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
        { errors.password && <p className="errors">{errors.password}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
      </div>

      <button disabled={formIsInvalid} className="main-button">Register</button>
    </form>
  );
};

export default RegisterForm;
