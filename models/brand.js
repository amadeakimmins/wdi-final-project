const mongoose = require('mongoose');

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
  image5: { type: String }
});

brandSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('brand', brandSchema);
