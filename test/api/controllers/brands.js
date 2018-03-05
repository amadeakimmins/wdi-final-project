/* globals api, expect, it, describe, afterEach, beforeEach */
require('../../spec_helper');

const Brand = require('../../../models/brand');

describe('Brands Controller Tests', () => {
  afterEach(done => {
    Brand.collection.drop();
    done();
  });

  describe('GET /api/brands', () => {
    beforeEach(done => {
      Brand
        .create({
          name: 'Zady',
          categories: 'women',
          about: 'sustainable',
          website: 'http://zady.co.uk',
          priceRange: '££',
          image1: 'http://zady.co.uk',
          image2: 'http://zady.co.uk',
          image3: 'http://zady.co.uk',
          image4: 'http://zady.co.uk',
          image5: 'http://zady.co.uk'
        })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/brands')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
