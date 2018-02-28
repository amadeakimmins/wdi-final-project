const router = require('express').Router();
const auth = require('../controllers/auth');
const brands = require('../controllers/brands');
const secureRoute = require('../lib/secureRoute');

router.route('/brands')
  .get(brands.index)
  .post(secureRoute, brands.create);

router.route('/brands/:id')
  .get(brands.show)
  .put(secureRoute, brands.update)
  .delete(secureRoute, brands.delete);

router.route('/brands/:id/comments')
  .post(secureRoute, brands.addComment);
router.route('/brands/:id/comments/:commentId')
  .delete(secureRoute, brands.deleteComment);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
