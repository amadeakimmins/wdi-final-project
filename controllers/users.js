const User = require('../models/user');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    // .populate()
    .exec()
    .then((user) => {
      console.log(user);
      if(!user) return res.notFound();

      res.json(user);
    })
    .catch(next);
}

// function usersUpdate(req, res, next) {
//   User
//     .findById(req.params.id)
//     .then(user => {
//       if(!user) return res.status(401).json({ message: 'No user found'});
//
//       for(const field in req.body) {
//         user[field] = req.body[field];
//       }
//
//       return user.save({ validateBeforeSave: false });
//     })
//     .then(user => res.json(user))
//     .catch(next);
// }

module.exports = {
  show: usersShow
  // update: usersUpdate
};
