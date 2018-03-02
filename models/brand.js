const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

commentSchema.set('toJSON', { virtuals: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

productSchema.set('toJSON', { virtuals: true });

const brandSchema = mongoose.Schema({
  name: { type: String, required: true },
  categories: [],
  about: { type: String, required: true },
  website: { type: String, required: true },
  priceRange: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
  image4: { type: String },
  image5: { type: String },
  comments: [ commentSchema ],
  products: [ productSchema ],
  favorites: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

brandSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Brand', brandSchema);
