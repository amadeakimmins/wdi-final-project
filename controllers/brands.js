const Brand = require('../models/brand');

function brandsIndex(req, res, next) {
  Brand
    .find()
    .exec()
    .then(brands => res.json(brands))
    .catch(next);
}

function brandsCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Brand
    .create(req.body)
    .then(brand => res.status(201).json(brand))
    .catch(next);
}

function brandsShow(req, res, next) {
  Brand
    .findById(req.params.id)
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

function addCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Brand
    .findOne({ id: req.params.id })
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      const comment = brand.comments.create(req.body);
      brand.comments.push(comment);

      return brand.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Brand
    .findOne({ id: req.params.id })
    .exec()
    .then((brand) => {
      if(!brand) return res.notFound();

      const comment = brand.comments.id(req.params.commentId);
      comment.remove();

      return brand.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: brandsIndex,
  create: brandsCreate,
  show: brandsShow,
  update: brandsUpdate,
  delete: brandsDelete,
  addComment: addCommentRoute,
  deleteComment: deleteCommentRoute
};
