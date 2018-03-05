const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  rating: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

commentSchema.set('toJSON', { virtuals: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

productSchema.set('toJSON', { virtuals: true });

const brandSchema = mongoose.Schema({
  name: { type: String, required: 'Name is required' },
  categories: [{ type: String, required: 'At least one category is required' }],
  about: { type: String, required: 'A description is required' },
  website: { type: String, required: 'A website link is required' },
  priceRange: { type: String, required: 'Price range is required' },
  image1: { type: String, required: 'Main image is required' },
  image2: { type: String, required: 'At least two product images are required' },
  image3: { type: String, required: 'At least two product images are required' },
  image4: { type: String },
  image5: { type: String },
  comments: [ commentSchema ],
  products: [ productSchema ],
  favorites: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

brandSchema.pre('validate', function checkCategories(next) {
  if(this.categories.length < 1) {
    this.invalidate('categories', 'Must have 1 or more categories');
  }
  next();
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
