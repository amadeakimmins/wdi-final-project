const router = require('express').Router();
const auth = require('../controllers/auth');
const brands = require('../controllers/brands');
const secureRoute = require('../lib/secureRoute');
const users = require('../controllers/users');


// brands
router.route('/brands')
  .get(brands.index)
  .post(secureRoute, brands.create);
router.route('/brands/:id')
  .get(brands.show)
  .put(secureRoute, brands.update)
  .delete(secureRoute, brands.delete);
// comments
router.route('/brands/:id/comments')
  .post(secureRoute, brands.addComment);
router.route('/brands/:id/comments/:commentId')
  .delete(secureRoute, brands.deleteComment);
// products
router.route('/brands/:id/products')
  .post(secureRoute, brands.addProduct);
router.route('/brands/:id/products/:productId')
  .delete(secureRoute, brands.deleteProduct);

// authentication
router.route('/register')
  .post(auth.register);
router.route('/login')
  .post(auth.login);

// user
router.route('/users/:id')
  .get(users.show);
// .put(users.update);



router.all('/*', (req, res) => res.notFound());

module.exports = router;
