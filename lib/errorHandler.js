function errorHandler(err, req, res, next) {

  if(err.name === 'ValidationError') {
    err.status = 400;
    err.message = 'Unprocessable Entity';

    const errors = {};
    for(const key in err.errors) {
      errors[key] = err.errors[key].message;
    }
    err.errors = errors;
  }

  if(err.code === 11000) {
    err.errors = {
      emailUnique: 'There is an account registered with that email'
    };
  }

  err.message = err.message || 'Internal Server Error';
  err.status = err.status || 500;


  res.status(err.status).json({ message: err.message, errors: err.errors });

  next(err);
}

module.exports = errorHandler;
