const Brand = require('../models/brand');

function brandsIndex(req, res, next) {
  Brand
    .find()
    .exec()
    .then(brands => res.json(brands))
    .catch(next);
}

function brandsCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  if(req.file) req.body.image = req.file.filename;

  Brand
    .create(req.body)
    .then(brand => res.status(201).json(brand))
    .catch(next);
}

function brandsShow(req, res, next) {
  Brand
    .findById(req.params.id)
    .populate('comments.createdBy products.createdBy createdBy')
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();
      res.json(brand);
    })
    .catch(next);
}

function brandsUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();
      brand = Object.assign(brand, req.body);
      return brand.save();
    })
    .then(brand => res.json(brand))
    .catch(next);
}

function brandsDelete(req, res, next) {
  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();
      return brand.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

// ADD COMMENTS //

function addCommentRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      const comment = brand.comments.create(req.body);
      brand.comments.push(comment);

      return brand.save();
    })
    .then(brand => Brand.populate(brand, { path: 'comments.createdBy' }))
    .then(brand => res.json(brand))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {

  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      const comment = brand.comments.id(req.params.commentId);
      comment.remove();

      brand.save();
      res.json(brand);
    })
    .then(() => res.status(204).end())
    .catch(next);
}

//  ADD PRODUCTS //

function addProductRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  console.log(req.body);

  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      const product = brand.products.create(req.body);
      brand.products.push(product);

      return brand.save();
    })
    .then(brand => res.json(brand))
    .catch(next);
}

function deleteProductRoute(req, res, next) {

  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      const product = brand.products.id(req.params.productId);
      product.remove();

      brand.save();
      res.json(brand);
    })
    .then(() => res.status(204).end())
    .catch(next);
}

// FAVOURITE BRANDS //
function favoriteBrand(req, res, next) {

  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      brand.favorites.push(req.currentUser.id);

      return brand.save();
    })
    .then((brand) => res.json(brand))
    .catch(next);
}

function unfavoriteBrand(req, res, next) {
  Brand
    .findById(req.params.id)
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();
      console.log(brand.favorites);

      const indexOfFavorite = brand.favorites.indexOf(req.currentUser.id);

      brand.favorites.splice(indexOfFavorite, 1);

      return brand.save();
    })
    .then((brand) => res.json(brand))
    .catch(next);
}

module.exports = {
  index: brandsIndex,
  create: brandsCreate,
  show: brandsShow,
  update: brandsUpdate,
  delete: brandsDelete,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute,
  addProduct: addProductRoute,
  deleteProduct: deleteProductRoute,
  favorite: favoriteBrand,
  unfavorite: unfavoriteBrand
};
