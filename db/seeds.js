const mongoose = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

const User = require('../models/user');
const Brand = require('../models/brand');

User.collection.drop();
Brand.collection.drop();

User
  .create([{
    fullname: 'Amadea Kimmins',
    username: 'amadeakimmins',
    email: 'amadea.kimmins@gmail.com',
    password: 'hello',
    passwordConfirmation: 'hello'
  }, {
    fullname: 'Bella Dunlop',
    username: 'bella',
    email: 'bella@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    fullname: 'Jane Johnson',
    username: 'jane69',
    email: 'jane@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    fullname: 'Billy Edwards',
    username: 'billybill',
    email: 'bill@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    fullname: 'Milo Thomson',
    username: 'miley',
    email: 'milo@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    fullname: 'Louisa Keane',
    username: 'loulee',
    email: 'louisa@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then(users => {
    console.log(`${users.length} users created!`);


    return Brand
      .create([{
        name: 'Zady',
        categories: ['women', 'accessories'],
        about: 'A company with the mission to understand "quality". In a system that is training us to buy more and ore products of increasingly low-quality goods  while hiding the outrageously high environmental and social costs of its production. Zady is creating the best material the world has to offer, working through the supply chain starting right from the beginning, at the farm. Finally they construct each piece so every stitch is measured and secure — none of this fall-apart-in-three-washes arrangement. The end result is a product designed and constructed to delight not just for one season, but for years to come. Through this timeless approach we’re working to make getting dressed a pleasure while cutting down on the over-production of thoughtless design. So fewer products end up in our landfills and more of it ends up where it should be - on us.',
        website: 'https://zady.com/',
        priceRange: '£££',
        image1: 'http://www.sociallyconsciousliving.com/wp-content/uploads/2017/01/zady1-810x537.png',
        image2: 'https://products-zady-com1.a.ssl.fastly.net/75/21fdc0a76b11e6b0e19d84a830d53f/SHOT_26_002.jpg',
        image3: 'https://products-zady-com1.a.ssl.fastly.net/37/06d4208ff611e69f38694afe11f17d/SILKDRESSSHOT2.jpg',
        image4: 'https://products-zady-com0.a.ssl.fastly.net/43/05c9d07efc11e6baa60fcc4772d6b7/Turtneck-front.jpg',
        image5: 'https://products-zady-com1.a.ssl.fastly.net/64/3b22d0a1f711e6ab7083a27c4bcd87/Khaki-Trench-selling-shot-back.jpg',
        createdBy: users[0]._id,
        products: [
          {
            name: 'Silk Skirt',
            image: 'https://products-zady-com0.a.ssl.fastly.net/ab/392cf08fca11e688d3a9358cd9a3c8/Screen-Shot-2016-10-08-at-10.38.06-AM.jpg',
            rating: '★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Camel Pencil Skirt',
            image: 'https://products-zady-com2.a.ssl.fastly.net/9c/9688107eff11e6baa60fcc4772d6b7/PENCIL-SKIRT-FULL.jpg',
            rating: '★★★★★',
            createdBy: users[2]._id
          }, {
            name: 'Selen Stripped Scarf',
            image: 'https://zady-web-production2.s3.amazonaws.com/65/3744b06d6a11e59236c9ebca4bd6c9/Fw15_APeaceTreaty_onfig_1.jpg',
            rating: '★★★★',
            createdBy: users[5]._id
          }
        ],
        comments: [
          {
            text: 'An amazing company with an incredible mission! All clothes are made beautifully and worth every penny!',
            rating: '★★★★★',
            createdBy: users[3]._id
          }, {
            text: 'I agree, completely amazing company! I rarely buy from anywhere else and the clothes last forever.',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ]
      }, {
        name: 'Reformation',
        categories: ['women'],
        about: 'Reformation puts sustainability at the core of everything they do. Their factory uses the most efficient, eco-friendly and pro-social technologies and practices they can get. They invest in green building infrastructure to minimize our waste, water, and energy footprints. By providing on-the-job training and opportunities for growth, they also invest in the people who make this revolution possible.',
        website: 'https://www.thereformation.com/',
        priceRange: '£££',
        image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnQtUxPCapnO6wJpV_lpFYOXFhaYxugQ2h92wXjAXOZFOZ8xpUg',

        image2: 'https://assets2.thereformation.com/app/public/assets/products/140537/original/AVA_DRESS_MAY_1_clp.jpg?1519265637%27)',
        image3: 'https://assets2.thereformation.com/app/public/assets/products/124728/original/MILAN_DRESS_IVORY_1_CLP.jpg?1507318225%27)',
        image4: 'https://assets2.thereformation.com/app/public/assets/products/139819/original/GEORGIA_JUMPSUIT_KASAI_1_clp.jpg?1518832866%27)',
        image5: 'https://assets2.thereformation.com/app/public/assets/products/131429/original/REX_TWO_PIECE_HEATHER_PLD_1_CLP.jpg?1512769948%27)',
        createdBy: users[0]._id,
        products: [
          {
            name: 'Hendrix Jean',
            image: 'https://media1.popsugar-assets.com/files/thumbor/ldo658sQyY-WwZUHN8Yzl8h7cKg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/02/21/775/n/44344577/3bd21f2dfe337ed2_Screen_Shot_2018-02-21_at_9.36.22_AM/i/Hendrix-Jean.png',
            rating: '★★★★★',
            createdBy: users[3]._id
          }, {
            name: 'Roper Jean',
            image: 'https://assets2.thereformation.com/app/public/assets/products/125440/original/ROPER_JEAN_SULU_5_mobile.jpg?1507825680',
            rating: '★★★★',
            createdBy: users[1]._id
          }, {
            name: 'Angela Dress',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/f6/79/4e/f6794e5593c5c378087924592a394c4d.jpg',
            rating: '★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'The best jeans and such cute dresses for the summer!',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            text: 'More suited for the petite woman but all the clothes are lovely',
            rating: '★★★',
            createdBy: users[5]._id
          }
        ]
      }, {
        name: 'Stella McCartney',
        categories: ['women', 'accessories', 'men'],
        about: 'We are agents of change. We challenge and push boundaries to make luxurious products in a way that is fit for the world we live in today and the future: beautiful and sustainable. No compromises. Each decision we make is a symbol of our commitment to defining what the future of fashion looks like. From never using leather or fur and pioneering new alternative materials to utilising cutting edge technologies, pushing towards circularity, protecting ancient and endangered forests and measuring our impact with ground-breaking tools.',
        website: 'https://www.stellamccartney.com/',
        priceRange: '£££',
        image1: 'http://blog.fashionboss.com/wp-content/uploads/2014/01/stella_mccartney2.jpeg',
        image2: 'https://www.stellamccartney.com/42/42640168GU_11_h.jpg',
        image3: 'https://www.stellamccartney.com/38/38696917UX_11_h.jpg',
        image4: 'https://www.stellamccartney.com/38/38697048AQ_11_h.jpg',
        image5: 'https://www.stellamccartney.com/45/45379160FN_11_j.jpg',
        createdBy: users[2]._id,
        products: [
          {
            name: 'Falabella Reversible Tote',
            image: 'https://www.stellamccartney.com/45/45379254tj_12_h.jpg',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Gabriell Maxi Dress',
            image: 'https://www.stellamccartney.com/34/34827070SW_11_h.jpg',
            rating: '★★★★★',
            createdBy: users[1]._id
          }, {
            name: 'Lorinda Embroidery Bomber Jacket',
            image: 'https://www.stellamccartney.com/41/41765534LG_11_h.jpg',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Stella McCartney is a genius',
            rating: '★★★★★',
            createdBy: users[5]._id
          }, {
            text: 'I bought one of her bags, best thing I ever bought',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ]
      }, {
        name: 'Svilu',
        categories: ['women'],
        about: 'With the privilege of creating comes a responsibility to do it in a kinder way. SVILU considers the full picture. From the environmental impact of our materials, to the conditions and standards of our factories, to the inner operations of our business – our choices reflect our mission: mindfully made™.',
        website: 'https://svilu.com/',
        priceRange: '£££',
        image1: 'http://dtayjcy3tbkw.cloudfront.net/wp-content/uploads/2017/01/21042509/svilu-clothing-1024x734.jpg',
        image2: 'https://svilu.com/wp-content/uploads/2016/11/2-NIR_7952-copy.jpg',
        image3: 'https://svilu.com/wp-content/uploads/2016/11/4-NIR_9083-copy.jpg',
        image4: 'https://svilu.com/wp-content/uploads/2016/11/10-NIR_8287-copy.jpg',
        image5: 'https://svilu.com/wp-content/uploads/2016/11/19-NIR_8427-copy.jpg',
        createdBy: users[3]._id,
        products: [
          {
            name: 'Open-back black dress',
            image: 'https://svilu.com/wp-content/uploads/2017/02/02.jpg',
            rating: '★★★★',
            createdBy: users[3]._id
          }, {
            name: 'White Mid Dress',
            image: 'https://svilu.com/wp-content/uploads/2017/02/05.jpg',
            rating: '★★★★',
            createdBy: users[1]._id
          }
        ],
        comments: [
          {
            text: 'Super sophisticated!',
            rating: '★★★★★',
            createdBy: users[5]._id
          }
        ]
      }, {
        name: 'Chinti & Parker',
        categories: ['women', 'accessories'],
        about: 'It’s THE place for organic cashmere and they’re branching out more and more — into Bretons, summer dresses, shirts and shoes.',
        website: 'https://www.chintiandparker.com/uk/',
        priceRange: '£££',
        image1: 'https://images.harrods.com/Content/chinti-parker-shop-bp.jpg?dwn=706px:0px',
        image2: 'https://www.chintiandparker.com/media/catalog/product/cache/1/small_image/445x667/9df78eab33525d08d6e5fb8d27136e95/b/l/black-cashmere-star-scarf_cp381bc_1.jpg',
        image3: 'https://www.chintiandparker.com/media/catalog/product/cache/1/small_image/445x667/9df78eab33525d08d6e5fb8d27136e95/s/u/sunflower-piped-milano-jacket_kk99mbc_2.jpg',
        image4: 'https://www.chintiandparker.com/media/catalog/product/cache/1/small_image/445x667/9df78eab33525d08d6e5fb8d27136e95/i/-/i-am-cashmere-sweater_kk118xbm_2.jpg',
        image5: 'https://www.chintiandparker.com/media/catalog/product/cache/1/small_image/445x667/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow-graduated-stripe-cashmere-sweater_kk88mc_2.jpg',
        createdBy: users[5]._id,
        products: [
          {
            name: 'I am Cashmere Sweater',
            image: 'https://www.chintiandparker.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/i/-/i-am-cashmere-sweater_kk118xbm_2.jpg',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Love Women Cashmere Sweater',
            image: 'https://www.chintiandparker.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/o/love-women-cashmere-sweater_kk115xbm_1.jpg',
            rating: '★★★★',
            createdBy: users[3]._id
          }, {
            name: 'Navy Cashmere Lounge Pant',
            image: 'https://www.chintiandparker.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/n/a/navy-stripe-trim-cashmere-lounge-pants_kk91nm_1_1.jpg',
            rating: '★★★★',
            createdBy: users[5]._id
          }, {
            name: 'Cream Silk Striped Pants',
            image: 'https://www.chintiandparker.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/cream-silk-striped-pants_pk04bb_2.jpg',
            rating: '★★★★',
            createdBy: users[1]._id
          }
        ],
        comments: [
          {
            text: 'The BEST cashmere jumpers!! My favourite is the \'I am\' cashmere sweater!',
            rating: '★★★★★',
            createdBy: users[3]._id
          }, {
            text: 'Get the cashmere loungewear, you\'ll never want to wear anything else',
            rating: '★★★★★',
            createdBy: users[5]._id
          }
        ]

      }, {
        name: 'kowtow',
        categories: ['women'],
        about: 'Certified organic cotton clothing in classic but cool oversized shirts, dresses, boxy jackets and culottes.',
        website: 'https://us.kowtowclothing.com/',
        priceRange: '£££',
        image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPbQlp4JotWrkzvxmtTNlGwgcDX_GPB-LBWOBPqYowQmG4Gs0',
        image2: 'https://cdn.shopify.com/s/files/1/2182/6091/products/choreography-jumper_04_army-green_lookbook_1024x1024@2x.jpg?13008533507746690969',
        image3: 'https://cdn.shopify.com/s/files/1/2182/6091/products/nelken-top_06_gold_lookbook_1024x1024@2x.jpg?13008533507746690969',
        image4: 'https://cdn.shopify.com/s/files/1/2182/6091/products/SlowpaceDress_007_navy_lookbook_a83c6987-f765-417f-bb2b-aa13353dc70b_1024x1024@2x.jpg?13008533507746690969',
        image5: 'https://cdn.shopify.com/s/files/1/2182/6091/products/formation-jacket_06_denim_lookbook_1024x1024@2x.jpg?13008533507746690969',
        createdBy: users[5]._id,
        products: [
          {
            name: 'Stage Pant, Black',
            image: 'https://cdn.shopify.com/s/files/1/2182/6091/products/stage-pant_11_black_lookbook_800x1200@2x.jpg?v=1517363185',
            rating: '★★★★',
            createdBy: users[5]._id
          }, {
            name: 'Turnaround Pant, Red',
            image: 'https://cdn.shopify.com/s/files/1/2182/6091/products/turnaround-pant_36_red_lookbook_800x1200@2x.jpg?v=1517363513',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'All the items are made sustainably and ethically and with real design in mind',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ]
      }, {
        name: 'Rapanui',
        categories: ['women', 'men'],
        about: 'Rapanui make products from more sustainable materials like Organic Cotton. Most of their work in the first few years of the brand was in helping customers understand where clothing comes from and how they are made. You can scan the code inside every product they make and find out more info about its origins. They also believe that the future of fashion is a circular economy, so when you\'re done, you can send old products back to them and cash in the material for store credit.',
        website: 'https://rapanuiclothing.com/',
        priceRange: '£',
        image1: 'http://www.stundumplings.co.uk/wp-content/uploads/2014/01/rapanui-mens-tshirt-polar-bear.jpg',
        image2: 'https://rapanuiclothing.com/uploaded/thumbnails/rna15_mens-merino-wool-jumper_dark-yellow_003_15387898_480xauto.jpg',
        image3: 'https://rapanuiclothing.com/uploaded/thumbnails/grey-merino-wool-jumper_13045961_480xauto.jpg',
        image4: 'https://rapanuiclothing.com/uploaded/thumbnails/polar-berg_9876765_480xauto.jpg',
        image5: 'https://rapanuiclothing.com/uploaded/thumbnails/redwine-baseball-top_15819154_480xauto.jpg',
        createdBy: users[2]._id,
        products: [
          {
            name: 'Long sleeve baseball shirt',
            image: 'https://rapanuiclothing.com/uploaded/thumbnails/rna8-grey-baseball_13046632_480xauto.jpg',
            rating: '★★★★',
            createdBy: users[5]._id
          }, {
            name: 'Wool Cargigan',
            image: 'https://rapanuiclothing.com/uploaded/thumbnails/rna23_mens-cardigan_stone_002_15387366_480xauto.jpg',
            rating: '★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Not the most exciting clothing but good quality',
            rating: '★★★',
            createdBy: users[4]._id
          }, {
            text: 'Better for men\'s clothing than for women\'s',
            rating: '★★★',
            createdBy: users[1]._id
          }
        ]
      }, {
        name: 'Ankura',
        categories: ['women', 'accessories'],
        about: 'Ankura is a Peruvian based sustainable fashion brand that works to complement a sustainable and ethical lifestyle, creating must-have pieces with a conscious process. They believe that ethical & sustainable fashion is not a trend, it is a movement. ',
        website: 'https://www.ankurabrand.com/',
        priceRange: '£££',
        image1: 'https://www.ankurabrand.com/wp/wp-content/uploads/2017/11/Ankura-facebook-2.jpg',
        image2: 'https://www.shopankurabrand.com/wp-content/uploads/2017/03/MG_5990.jpg',
        image3: 'https://www.shopankurabrand.com/wp-content/uploads/2016/09/bs3.jpg',
        image4: 'https://www.shopankurabrand.com/wp-content/uploads/2016/03/2_1440x2160.jpg',
        image5: 'https://www.shopankurabrand.com/wp-content/uploads/2016/09/AC-Relleno-4.jpg',
        createdBy: users[0]._id,
        products: [
          {
            name: 'Arielle Dress',
            image: 'https://www.shopankurabrand.com/wp-content/uploads/2016/11/9-copy.jpeg',
            rating: '★★★★',
            createdBy: users[2]._id
          }, {
            name: 'Wool Cargigan',
            image: 'https://www.shopankurabrand.com/wp-content/uploads/2017/03/MG_5990.jpg',
            rating: '★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Oppurtunities to co-design with them - totally amazing!',
            rating: '★★★★★',
            createdBy: users[4]._id
          }, {
            text: 'Beautiful women\'s clothing and accessories',
            rating: '★★★',
            createdBy: users[1]._id
          }
        ]
      }, {
        name: 'Thought',
        categories: ['women', 'men', 'accessories'],
        about: 'Thought uses sustainable products like rayon and tencel from ethically sourced wood, recycled polyester which gives  a new lease of life to plastic bottles destined for landfill, and wool from humanely reared animals.',
        website: 'https://www.wearethought.com/',
        priceRange: '£££',
        image1: 'https://www.drapersonline.com/pictures/2000x2000fit/3/4/1/3035341_Thought-SS17.jpg',
        image2: 'https://www.wearethought.com/media/catalog/product/cache/thumbnail/620x836/beff4985b56e3afdbeabfc89641a4582/m/w/mwt3442-louis-grandpa-hemp-grandad-collar-shirt-sky-blue-front.jpg',
        image3: 'https://www.wearethought.com/media/catalog/product/cache/thumbnail/620x836/beff4985b56e3afdbeabfc89641a4582/m/s/msb3183-jacob-organic-cotton-trousers-grey-vapour-front.jpg',
        image4: 'https://www.wearethought.com/media/catalog/product/cache/thumbnail/620x836/beff4985b56e3afdbeabfc89641a4582/w/s/wst3487--poppyred-corinna-organic-cotton-jumper-0004.jpg',
        image5: 'https://www.wearethought.com/media/catalog/product/cache/thumbnail/620x836/beff4985b56e3afdbeabfc89641a4582/w/s/wsb3501--brigid-skirt-flower-print-skirt-0003.jpg',
        createdBy: users[5]._id,
        products: [
          {
            name: 'Spot Print Knit Cardigan',
            image: 'https://www.wearethought.com/media/catalog/product/cache/image/700x957/e9c3970ab036de70892d86c6d221abfe/w/s/wst3483--elaine-printed-knit-cardigan-0001.jpg',
            rating: '★★★★',
            createdBy: users[2]._id
          }, {
            name: 'Louis Grandpa',
            image: 'https://www.wearethought.com/media/catalog/product/cache/thumbnail/620x836/beff4985b56e3afdbeabfc89641a4582/m/w/mwt3442-louis-grandpa-hemp-grandad-collar-shirt-sky-blue-front.jpg',
            rating: '★★★★',
            createdBy: users[4]._id
          }
        ],
        comments: [
          {
            text: 'Got some lovely socks from here.',
            rating: '★★★★',
            createdBy: users[4]._id
          }, {
            text: 'Really well made clothes at a good price',
            rating: '★★★★',
            createdBy: users[1]._id
          }
        ]
      }, {
        name: 'Silou Activewear',
        categories: ['women'],
        about: 'The brand uses non-toxic materials that are good for the body and the environment, and avoids using any harsh chemicals so that production impacts are left to the bare minimum.',
        website: 'https://siloulondon.com/',
        priceRange: '£££',
        image1: 'https://i1.wp.com/attitudeorganic.com/wp-content/uploads/2017/10/silou.jpg?resize=800%2C600&ssl=1',
        image2: 'https://i.pinimg.com/736x/cc/ac/3d/ccac3d910a4de5afab55c1caafad4dec--behind-the-scenes-lookbook.jpg',
        image3: 'https://pollykingandco.com/wp-content/uploads/2018/02/silou_image_01.jpg',
        image4: 'http://www.pushpr.co.uk/wp-content/uploads/2017/01/003_161110_NH_SPORT_020f1-3.jpg',
        image5: 'https://reve-en-vert.com/wp-content/uploads/2017/11/Lydia-Sports-Bra-2-1-silou-london-309x417.jpg',
        createdBy: users[3]._id,
        products: [
          {
            name: 'Black Cross Sportsbra',
            image: 'https://reve-en-vert.com/wp-content/uploads/2017/11/lydia_M001_T005_Black_1-1-silou-london-309x417.jpg',
            rating: '★★★★',
            createdBy: users[1]._id
          }, {
            name: 'Navy Leggings',
            image: 'https://bekibolondon.com/wp-content/uploads/2017/10/jaggad-women-s-black-black-compression-leggings-100576722968_grande-460x600.jpg',
            rating: '★★★★',
            createdBy: users[2]._id
          }
        ],
        comments: [
          {
            text: 'The best sports gear - don\'t need to shop anywhere else',
            rating: '★★★★',
            createdBy: users[2]._id
          }
        ]
      }, {
        name: 'Laura Ironside',
        categories: ['women'],
        about: 'A womenswear label which focuses on slowing down the fashion cycle and encouraging conscious consumption by creating seasonless and limited styles which are designed and developed in Scotland and then manufactured in London.',
        website: 'http://www.lauraironside.com/',
        priceRange: '£££',
        image1: 'http://payload207.cargocollective.com/1/0/31635/6442449/Igor-Termenon-Laura-Ironside-2---news_800.jpg',
        image2: 'https://static1.squarespace.com/static/57bdf6a58419c28ef27e573a/586a9bc73e00bec12e67f783/586a9c216b8f5b6deb226b94/1483389858934/Look+1-1-new.jpg?format=500w',
        image3: 'https://static1.squarespace.com/static/57bdf6a58419c28ef27e573a/586ab427d1758eb48823f4f3/586ac54fd482e92824900ed9/1483392411289/Look+3-5.jpg?format=1000w',
        image4: 'https://static1.squarespace.com/static/57bdf6a58419c28ef27e573a/586ab562bebafbc7473ecea7/586ac490d2b8577385783e88/1483392146784/Look+4-9.jpg?format=500w',
        image5: 'https://static1.squarespace.com/static/57bdf6a58419c28ef27e573a/586ac77ad2b8577385787776/586ac7c6c534a5731deab2c4/1483392970727/Look+6-7.jpg?format=500w',
        createdBy: users[1]._id,
        products: [
          {
            name: 'Silk Dress',
            image: 'https://static1.squarespace.com/static/57bdf6a58419c28ef27e573a/586a9bc73e00bec12e67f783/586a9c216b8f5b6deb226b94/1483389858934/Look+1-1-new.jpg?format=500w',
            rating: '★★★★',
            createdBy: users[5]._id
          }
        ],
        comments: [
          {
            text: 'I got one of the silk dresses, it is so beautiful!! Go get yourself one',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ]
      }, {
        name: 'Zoe Morton',
        categories: ['accessories'],
        about: 'Morton\'s first collection was inspired by her grandfather who was a wood carver and painter, aptly named The Greenwood Collection, and is made in London from recycled silver. ',
        website: 'https://zmorton.com',
        priceRange: '£££',
        image1: 'http://flat15.com/wp-content/uploads/2016/08/Zoe-Morton-Jewellery.jpg',
        image2: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/58d1455c2e69cf5657c04e24/1501678519788/JS_ZoePlantLife0826_retouched_crop.jpg?format=1500w',
        image3: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/58d1495ccd0f68e7f3643cd0/1490110820448/JS_ZoePlantLife0634.jpg?format=1500w',
        image4: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/59cbcdc7cf81e0784691856a/1507121311991/ROADS-24_crop.jpg?format=1000w',
        image5: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/55f16e47e4b0fcd506759173/1519201823554/ZM_GreenwoodRing_Thin.jpg?format=1000w',
        createdBy: users[3]._id,
        products: [
          {
            name: 'Roundabout Earrings',
            image: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/59e5af272aeba56108af3c4a/1508224815904/ROADS-10_crop.jpg?format=750w',
            rating: '★★★★★',
            createdBy: users[5]._id
          }, {
            name: 'Roads the Earrings',
            image: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/59cbcd70d7bdceabea139192/1506528628300/ROADS_crop.jpg?format=750w',
            rating: '★★★★★',
            createdBy: users[2]._id
          }, {
            name: 'Plantlife Pendant 18kt gold',
            image: 'https://static1.squarespace.com/static/55c22137e4b0a390257b0249/5756da2486db43b14e88f02d/58d1472c3e00bea07a3503cc/1501679379192/JS_ZoePlantLife0875_retouched_crop.jpg?format=750w',
            rating: '★★★★★',
            createdBy: users[1]._id
          }
        ],
        comments: [
          {
            text: 'simple and elegant jewellery',
            rating: '★★★★★',
            createdBy: users[2]._id
          },{
            text: 'my favourite are the roundabout earrings, can wear with anything',
            rating: '★★★★',
            createdBy: users[5]._id
          },{
            text: 'The wave earrings are a bit flimsy, mine have fallen apart after 4 wears',
            rating: '★★',
            createdBy: users[3]._id
          }
        ]
      }, {
        name: 'Baia',
        categories: ['accessories'],
        about: 'Founder Suzy Brown heads up a small, skilled team who are based in Yorkshire and handmake every bag that emerges from the workshop from start to finish. Brown, without the money required to go to a factory and not wanting to face the prospect of minimum orders, started the brand at home with a leather sewing machine and a hammer and watched it grow from there.',
        website: 'https://baiabags.co.uk/',
        priceRange: '£££',
        image1: 'https://sheerluxe.com/sites/default/files/2016/04/tt_0.jpg',
        image2: 'https://cdn.shopify.com/s/files/1/1138/3142/products/Baia-0917-1-566_980dbed1-778d-45c4-b127-2da31167e3ef_grande.jpg?v=1517780668',
        image3: 'https://cdn.shopify.com/s/files/1/1138/3142/products/Baia-0917-1-575_grande.jpg?v=1517776049',
        image4: 'https://cdn.shopify.com/s/files/1/1138/3142/products/Baia-0917-1-550_grande.jpg?v=1517778390',
        image5: 'https://cdn.shopify.com/s/files/1/1138/3142/products/Baia-0917-1-494_grande.jpg?v=1517776573',
        createdBy: users[2]._id,
        products: [
          {
            name: 'Mini Saddle, Fuschia',
            image: 'https://cdn.shopify.com/s/files/1/1138/3142/products/Baia-0917-1-598_grande.jpg?v=1517781941',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Mini Suede Drawstring, Mustard',
            image: 'https://cdn.shopify.com/s/files/1/1138/3142/products/Baia-0917-1-566_980dbed1-778d-45c4-b127-2da31167e3ef_grande.jpg?v=1517780668',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ],
        comments: [
          {
            text: 'IN LOVE WITH THESE BAGS',
            rating: '★★★★★',
            createdBy: users[2]._id
          },{
            text: 'The mini saddle is perfect for every occassion',
            rating: '★★★★★',
            createdBy: users[5]._id
          }
        ]
      }, {
        name: 'Veja',
        categories: ['accessories'],
        about: 'The Parisian trainer brand was launched in 2004 by Sébastien Kopp & François Morillion in an attempt to rethink how trainers are made. And the duo have defied all odds and done exactly that. The canvas is made from organic cotton, with wild rubber from the Amazon to create the soles. And the pair work with independent farmers to source materials to create innovative ecological fabrics, including shoes made from the skin of fish eaten by locals in Brazil, where the trainers are manufactured.',
        website: 'http://www.veja-store.com/en/',
        priceRange: '£££',
        image1: 'https://assets2.thereformation.com/app/public/assets/products/80272/original/VEJA_ESPLAR_MARSALA_SNEAKERS_WHITE_4.jpg?1476118170',
        image2: 'http://www.veja-store.com/6698-large_atch/esplar-leather-white-black.jpg',
        image3: 'http://www.veja-store.com/7664-large_atch/v-12-velcro-leather-black-black.jpg',
        image4: 'http://www.veja-store.com/7004-large_atch/v-10-suede-electric-blue.jpg',
        image5: 'http://www.veja-store.com/8937-large_atch/v-10-oxford-grey-pierre.jpg',
        createdBy: users[1]._id,
        products: [
          {
            name: 'V-lock Leather Black Black',
            image: 'http://www.veja-store.com/7664-large_atch/v-12-velcro-leather-black-black.jpg',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'V-12 Bmesh Black White',
            image: 'http://www.veja-store.com/7341-large_atch/v-12-bmesh-black-white.jpg',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ],
        comments: [
          {
            text: 'So comfortable and reasonable price for how long they last!',
            rating: '★★★★★',
            createdBy: users[5]._id
          },{
            text: 'Bought myself two pairs I love them so much!',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ]
      }, {
        name: 'Aiayu',
        categories: ['women', 'accessories'],
        about: 'The Denmark-based luxury brand, Aiayu, which also has roots in Bolivia, India and Nepal, aims to merge ancient skills carried out by local artisans with Scandinavian simplicity to create desirable designs that ignore temporary trends, and instead are pieces that you will keep forever (and are worthy of their price tag). The brand is a member of the Global Compact -the world’s largest corporate sustainability initiative - and adheres to a zero waste policy. ',
        website: 'https://www.aiayu.com/',
        priceRange: '£££',
        image1: 'http://wild-swans.com/wp-content/uploads/2012/02/aiayu-cashmere-green.jpg',
        image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIwqtMk9d1N05iJvXhmLdFew6vBEzVaThznU_T7gFzo46FsZH',
        image3: 'http://wac.b8d2.edgecastcdn.net/80B8D2/cdn-tomorrow/seanmcmenomy/wp-content/blogs.dir/6/files/2016/02/aiayu_presslayout_151026_ORG2.jpg',
        image4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFlh8G7Gd9UvOUlRsB28UQIvewcT6ayqeIG3OpJ-lnP6hTvSanQ',
        image5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgJJsMuV7XQt9VWI0yag5Iz1vA99XLbIBka0UyMW8OVNyFd-O',
        createdBy: users[0]._id,
        products: [
          {
            name: 'Khaki Shorts',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/72/84/6a/72846aa33c2b26b21b36fc82f33835e3.jpg',
            rating: '★★★',
            createdBy: users[0]._id
          }
        ],
        comments: [
          {
            text: 'Really lovely simple clothes, really well made!',
            rating: '★★★★',
            createdBy: users[5]._id
          }
        ]
      }, {
        name: 'Mandkhai',
        categories: ['women'],
        about: 'Known for knitwear, Madkhai creates sustainable cashmere pieces, while educating consumers about its truly transparent supply chain from Mongolia to the UK.',
        website: 'http://www.mandkhai.com/',
        priceRange: '££££',
        image1: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/5a44ce75419202c4d35a2fd6/5a44d1feec212d2c09373bce/1514891871871/Mandkhai_popup-4+lr.jpg?format=1000w',
        image2: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/58c13dbeb8a79bc99bf5923a/5a71966b9140b79f3b897cc4/1518518961084/ss18+purple+suit.jpg?format=750w',
        image3: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/58c13dbeb8a79bc99bf5923a/5a719f5de4966be6e6f17d50/1518519254871/ss18+white+frill+dress.jpg?format=750w',
        image4: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/58c13dbeb8a79bc99bf5923a/5a2e77c571c10b8afee47084/1514890873091/4846+Tube+detail+bomber+front.jpg?format=750w',
        image5: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/58c13dbeb8a79bc99bf5923a/59fc72ca53450ae23d8fd40d/1514890638592/3074+bullet+cape+darker.jpg?format=750w',
        createdBy: users[5]._id,
        products: [
          {
            name: 'Suit Blazer',
            image: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/58c13dbeb8a79bc99bf5923a/5a719612419202e3cc1c46c7/1518518949791/ss18+pink+suit.jpg?format=1000w',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Wrap Dress',
            image: 'https://static1.squarespace.com/static/5756a9dc01dbae2c96b894f8/58c13dbeb8a79bc99bf5923a/5a719f5de4966be6e6f17d50/1518519254871/ss18+white+frill+dress.jpg?format=1000w',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ],
        comments: [
          {
            text: 'The pink suit is a must have!',
            rating: '★★★★★',
            createdBy: users[5]._id
          }, {
            text: 'It really is!! I got it in the purple, best statement outfit!',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ]
      }, {
        name: 'almasanta',
        categories: ['women', 'accessories'],
        about: 'A contender for best sustainable online store, Almasanta hosts a comprehensive range of ethical fashion brands. Low stock levels, high quality, recycled carbon neutral packaging and a transparent supply chain means it’s somewhere you could source your whole wardrobe without compromising on your ethics.',
        website: 'https://almasanta.com/',
        priceRange: '££££',
        image1: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/uploads/brand_profile/top_banner/68/75e73dea-d967-4fed-9ea5-d8862f268419.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180227%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180227T194010Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5d1d6f345fb7d54212c39e994b8e43cfabc5f1709f0d04f61c9b81da3fdb4107',
        image2: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/products/images/2764/list_full_product.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180227%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180227T122053Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2611c6b7a38e013c5fc3d09513086d3beea9fa49bb07cff366e0509fd7b3129f',
        image3: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/products/images/3961/list_full_product.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180227%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180227T121144Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d73c53332b96230f837bc2ac7401857e0d5933cf790405dfcd965bbd2de45601',
        image4: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/products/images/4190/list_full_product.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180227%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180227T121757Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3d451d494cc7f3f85b9e75687baa9171a0516b6a125fc938874366551380efa5',
        image5: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/products/images/1949/list_full_product.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180227%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180227T121834Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ed29b04889fcc5a3a31942ca0ded6946fd1c49c6b83bf5ab1e76fbc09a1bfd21',
        createdBy: users[1]._id,
        products: [
          {
            name: 'Black Duster Coat',
            image: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/products/images/4409/full_product.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180305%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180305T231923Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6fa4920a624d72beb2328bf3f9c72a3e0ea0459404bf80fe0527069b1d56f12c',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Margaux Lonnberg Blazer',
            image: 'https://almasanta-production.s3.eu-west-1.amazonaws.com/products/images/4386/product.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJBV7XOM5Y6C23K4A%2F20180305%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180305T232005Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f8ace3127d683ba460d69f93fcbf261dc287b3178900d5edef278d1d01546b53',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Love the black long coat!',
            rating: '★★★★★',
            createdBy: users[5]._id
          }
        ]
      }, {
        name: 'All Sisters',
        categories: ['women'],
        about: 'Solely ‘swimwear (for the conscious fashionista)’, Barcelona-based brand All Sisters will be your new favourite holiday shop or place for perusing when you want to pretend it’s summer. With its brand ethos based on respecting the planet, while catering to the modern, eco-conscious women, the styles are sustainable, simple and genuinely stylish. Bonus: it’s so affordable.',
        website: 'https://shop.allsisters.com',
        priceRange: '££',
        image1: 'https://static.abikiniaday.com/uploads/2015/12/IMG_1984-1024x682.jpg',
        image2: 'https://cdn.shopify.com/s/files/1/0827/0589/products/andromeda_1024x1024.jpg?v=1498559609',
        image3: 'https://cdn.shopify.com/s/files/1/0827/0589/products/PYRAMID_bikini_blackandwhite_5954c863-7b20-408c-9a02-f4d51bfeb044_1024x1024.jpg?v=1498563639',
        image4: 'https://cdn.shopify.com/s/files/1/0827/0589/products/ALL_LOOK_SS17_07_sRGB_opt_1024x1024.jpg?v=1496744369',
        image5: 'https://cdn.shopify.com/s/files/1/0827/0589/products/3_fa53caef-4bcd-4220-81f5-d2bea6e7e443_1024x1024.jpg?v=1499168175',
        createdBy: users[0]._id,
        products: [
          {
            name: 'Cassiopea Swimsuit White',
            image: 'https://cdn.shopify.com/s/files/1/0827/0589/products/casiopea_d92943dc-d696-4241-9dee-50727d55522f_1024x1024.jpg?v=1433877529',
            rating: '★★★★★',
            createdBy: users[2]._id
          }, {
            name: 'Persei Bikini',
            image: 'https://cdn.shopify.com/s/files/1/0827/0589/products/PERSEI_c5c4f227-8d53-48f2-adb9-61b3a6a821b5_1024x1024.jpg?v=1498563719',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ],
        comments: [
          {
            text: 'Love this! Fits really comfortably and very flattering',
            rating: '★★★★★',
            createdBy: users[3]._id
          }, {
            text: 'Really great material! Really recommend',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ]
      }, {
        name: 'finisterre',
        categories: ['women','men'],
        about: 'Finisterre was founded in 2003 on three commitments: to product, environment and people. For these past 15 years, these commitments have been at the heart of every decision and our journey has been one of innovation to achieve sustainability, whilst continually striving to minimise the impact of both our business and product.',
        website: 'https://finisterre.com/',
        priceRange: '£££',
        image1: 'http://www.microcomms.co.uk/wp-content/uploads/2017/05/3006582_Finisterre-2.jpg',
        image2: 'https://cdn.shopify.com/s/files/1/1074/5128/products/lerwick_shirt_cream_fleck_m_onbody_CAT_480x.JPG?v=1517937119',
        image3: 'https://cdn.shopify.com/s/files/1/1074/5128/products/bowen_crew_navy_m_onbody_CAT_480x.JPG?v=1517947952',
        image4: 'https://cdn.shopify.com/s/files/1/1074/5128/products/alga_jean_indigo_m_onbody_CAT_480x.JPG?v=1517933213',
        image5: 'https://cdn.shopify.com/s/files/1/1074/5128/products/sandway_trouser_w_onbody_CAT_480x.jpg?v=1511542455',
        createdBy: users[4]._id,
        products: [
          {
            name: 'Alga Jean',
            image: 'http://cdn.shopify.com/s/files/1/1074/5128/products/petram_jean_indigo_slim_m_onbody_CAT_grande.JPG?v=1517933390',
            rating: '★★★★',
            createdBy: users[4]._id
          }, {
            name: 'Perran Logo Longsleeve',
            image: 'https://i.ebayimg.com/images/g/GfsAAOSwoG5Z8zB5/s-l300.jpg',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ],
        comments: [
          {
            text: 'Really cool long sleeve shirts',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ]

      }, {
        name: 'Absolutely Bear',
        categories: ['women','men', 'accessories'],
        about: 'Absolutely Bear is an ethical clothing label for socially conscious men and women. Our mission is to use business to improve lives, we do this through combining sustainable fashion with giving. 10% of our profits go directly to our charity partners.  ',
        website: 'https://absolutelybear.com/',
        priceRange: '££',
        image1: 'https://cdn.shopify.com/s/files/1/1061/4244/t/32/assets/logo.png?10059676345797212633',
        image2: 'https://cdn.shopify.com/s/files/1/1061/4244/products/Untitled-26_6e5d7cfa-018d-4cf7-bcaf-f92ed9054593_large.jpg?v=1515776472',
        image3: 'https://cdn.shopify.com/s/files/1/1061/4244/products/Untitled-21_large.jpg?v=1515776266',
        image4: 'https://cdn.shopify.com/s/files/1/1061/4244/products/Untitled-31_18a6e5fb-8c49-4be1-9dff-7aa1c8943232_large.jpg?v=1515960762',
        image5: 'https://cdn.shopify.com/s/files/1/1061/4244/products/1605205007lowres_large.jpg?v=1515959230',
        createdBy: users[4]._id,
        products: [
          {
            name: 'Alga Jean',
            image: 'https://cdn.shopify.com/s/files/1/1061/4244/products/Untitled-41_compact.jpg?v=1515775837',
            rating: '★★★★',
            createdBy: users[4]._id
          }
        ],
        comments: [
          {
            text: 'Great Men\'s Jumpers!',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ]

      }, {
        name: 'Howies',
        categories: ['women','men'],
        about: 'Activewear for men and women. Howies believes in quality and in making a product which lasts longer is better for the environment. They believe in making their clothes in a low impact way and are made from organic cotton.',
        website: 'http://www.howies.co.uk/',
        priceRange: '££',
        image1: 'https://www.trustedclothes.com/blog/wp-content/uploads/2016/04/WP_20160416_009.jpg',
        image2: 'http://www.howies.co.uk/media/catalog/product/cache/1/image/310x350/9df78eab33525d08d6e5fb8d27136e95/h/w/hwdi-m-181-pirate_black-parent_1.jpg',
        image3: 'http://www.howies.co.uk/media/catalog/product/cache/1/image/310x350/9df78eab33525d08d6e5fb8d27136e95/f/e/feller-m-171-pirate_black-parent_1.jpg',
        image4: 'http://www.howies.co.uk/media/catalog/product/cache/1/image/310x350/9df78eab33525d08d6e5fb8d27136e95/s/t/striped_merino_ls-w-173-peacoat-parent_1.jpg',
        image5: 'http://www.howies.co.uk/media/catalog/product/cache/1/small_image/310x350/9df78eab33525d08d6e5fb8d27136e95/b/l/blade-m-163-phantom-parent_1_5_1.jpg',
        createdBy: users[4]._id,
        products: [
          {
            name: 'Alga Jean',
            image: 'http://www.howies.co.uk/media/catalog/product/cache/1/image/100x133/9df78eab33525d08d6e5fb8d27136e95/b/l/blade-m-163-phantom-parent_3_1.jpg',
            rating: '★★★★',
            createdBy: users[4]._id
          }
        ],
        comments: [
          {
            text: 'Great outerwear sold here for men and women - good for all outdoor activities!',
            rating: '★★★★',
            createdBy: users[4]._id
          }
        ]
      }, {
        name: 'The White T-shirt Co.',
        categories: ['women','men'],
        about: 'We\'re committed to a responsible production process that looks after the environment and the people who make our organic cotton t-shirts. Our t-shirts are GOTS certified. This ensures independent verification that we have met strict quality, environment and social standards. Safe working conditions, no child labour, working hours and wage protection are a few of the key criteria, from the International Labour Organisation, that are monitored throughout our supply chain.',
        website: 'https://www.thewhitetshirt.com/',
        priceRange: '££',
        image1: 'https://www.thewhitetshirt.com/uploads/blog/540x379/the-white-t-shirt-co-grey-marl.jpg',
        image2: 'https://www.thewhitetshirt.com/uploads/thumbs/mens-relaxed-organic-cotton-white-long-sleeve-crew-neck-t-shirt-copy.jpg',
        image3: 'https://www.thewhitetshirt.com/uploads/thumbs/the-white-t-shirt-co-mens-grey-marl-t-shirt.jpg',
        image4: 'https://www.thewhitetshirt.com/uploads/thumbs/womens-black-organic-cotton-body-11111.jpg',
        image5: 'https://www.thewhitetshirt.com/uploads/thumbs/womens-white-organic-cotton-round-neck-front-jpg-11.jpg',
        createdBy: users[4]._id,
        products: [
          {
            name: 'Long Sleeve Crew Neck',
            image: 'https://www.thewhitetshirt.com/uploads/brag/mens-relaxed-organic-cotton-white-long-sleeve-crew-neck-t-shirt-copy.jpg',
            rating: '★★★★★',
            createdBy: users[4]._id
          }, {
            name: 'Short Sleeve V Neck',
            image: 'https://www.thewhitetshirt.com/uploads/brag/mens-grey-marl-fitted-v-neck.jpg',
            rating: '★★★★★',
            createdBy: users[4]._id
          }, {
            name: 'Long Sleeve Round Neck Body',
            image: 'https://www.thewhitetshirt.com/uploads/brag/womens-black-organic-cotton-body-11111.jpg',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ],
        comments: [
          {
            text: 'The perfect t-shirt!',
            rating: '★★★★★',
            createdBy: users[4]._id
          }, {
            text: 'I don\'t buy my tops from anywhere else',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ]

      }, {
        name: 'Knowledge Cotton Apparel',
        categories: ['men'],
        about: 'Knowledge Cotton embrace long-term partnerships with certified manufacturers who share our values to ensure our garments are produced in the best possible way. We have been in the textile industry since 1969, and we have seen the inside of an industry that is responsible for an enormous human impact on the environment. We know, to make real change, serious action is needed. At KnowledgeCotton Apparel, we strive to innovate with an endless drive to make unthinkable things possible. Read more about how we do it',
        website: 'https://knowledgecottonapparel.com',
        priceRange: '£££',
        image1: 'https://www.e-pitti.com/mediaObject/fieradigitale/archive/pittiuomo89/stands/K/knowledge-cotton-apparel/knowledge-cotton-apparel/pittiuomo_knowledgecotton_logo/original/pittiuomo_knowledgecotton_logo.png',
        image2: 'https://cdn.shopify.com/s/files/1/1355/6205/products/1498043963.6799_300x300.jpg?v=1517842432',
        image3: 'https://cdn.shopify.com/s/files/1/1355/6205/products/1498053660.6212_300x300.jpg?v=1516780619',
        image4: 'https://cdn.shopify.com/s/files/1/1355/6205/products/Basic_Loose_Fit_O-Neck_Tee_GOTS-T-shirt-10110-1231_Blue_melange-1_300x300.jpg?v=1519381450',
        image5: 'https://cdn.shopify.com/s/files/1/1355/6205/products/1498059716.3528_300x300.jpg?v=1519133088',
        createdBy: users[4]._id,
        products: [
          {
            name: 'Big checked co/linen shirt',
            image: 'https://cdn.shopify.com/s/files/1/1355/6205/products/1498053200.993_150x.jpg?v=1516780613',
            rating: '★★★★★',
            createdBy: users[4]._id
          }, {
            name: 'Chuck The Brain Chino',
            image: 'https://cdn.shopify.com/s/files/1/1355/6205/products/1485354499.087_150x.jpg?v=1519138138',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ],
        comments: [
          {
            text: 'Awesome shirts!!',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ]

      }, {
        name: 'Brothers We Stand',
        categories: ['men'],
        about: 'Knowledge Cotton embrace long-term partnerships with certified manufacturers who share our values to ensure our garments are produced in the best possible way. We have been in the textile industry since 1969, and we have seen the inside of an industry that is responsible for an enormous human impact on the environment. We know, to make real change, serious action is needed. At KnowledgeCotton Apparel, we strive to innovate with an endless drive to make unthinkable things possible. Read more about how we do it',
        website: 'https://www.brotherswestand.com/',
        priceRange: '££',
        image1: 'https://i.ytimg.com/vi/sCqVxG_2xfY/hqdefault.jpg',
        image2: 'https://cdn.shopify.com/s/files/1/0262/5311/products/MWT3441-Devan-Classic-Hemp-Shirt-SKY_BLUE-FRONT_Cropped_grande.jpg?v=1505833226',
        image3: 'https://cdn.shopify.com/s/files/1/0262/5311/products/regular_dunn_blue_1_sq_grande.jpg?v=1516705525',
        image4: 'https://cdn.shopify.com/s/files/1/0262/5311/products/kca_pique_knit_grande.jpg?v=1519054805',
        image5: 'https://cdn.shopify.com/s/files/1/0262/5311/products/cream-wave_pocket_4_Cropped_grande.png?v=1517505633',
        createdBy: users[4]._id,
        products: [
          {
            name: 'Thought Ezra Organic Cotton Overshirt',
            image: 'https://cdn.shopify.com/s/files/1/0262/5311/products/MSJ3180-Ezra-Organic-Cotton-Jacket-Close_Cropped_df025896-dbfa-4247-bda6-d4272b65f9e6_1024x1024.jpg?v=1519931536',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ],
        comments: [
          {
            text: 'My go to for men\'s sustainable fashion!',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ]

      }, {
        name: 'Aesop',
        categories: ['beauty'],
        about: 'As well as not testing its products or ingredients on animals, all Aesop\'s skincare products (aside from its brushes) are vegan. The brand also "extensively reviews" the regulatory requirements of new countries before it starts selling there to ensure that compulsory animal testing isn\'t required.',
        website: 'https://www.aesop.com/',
        priceRange: '££',
        image1: 'https://cdn.cultbeauty.co.uk/resized/840x/slots-img/bra/brandlanding_aesop_840x400-03jrs.jpg',
        image2: 'https://www.aesop.com/medias/Aesop-Body-Petitgrain-Reviving-Body-Gel-150mL-medium.png?context=bWFzdGVyfGltYWdlc3wyNjA0NjZ8aW1hZ2UvcG5nfGltYWdlcy9oZDAvaGE3Lzg3OTc0NDI1NzIzMTgucG5nfGFkMTVlOGU1ZDViN2EyOTBhZDQzZmE0MTUxODcyZGM4YTllN2FmNDI2OTI4MjZjNjcwMzJjMTM3NjBkMmY4NWU',
        image3: 'https://www.aesop.com/medias/Aesop-Body-Geranium-Leaf-Body-Cleanser-200mL-medium.png?context=bWFzdGVyfGltYWdlc3wzMzUwNjF8aW1hZ2UvcG5nfGltYWdlcy9oM2IvaGMyLzg4MTQ2Mjg2MDE4ODYucG5nfDAwMWEyMDBlNDUzNjg0OTNmZDdiNmNkZDhhMjZhZjI5ZGU2MmVlZDRjZGIxMWE1NmJiZjZhNmJlMmM5OGRkYzc',
        image4: 'https://www.aesop.com/medias/Aesop-Hair-Violet-Leaf-Hair-Balm-60mL-medium.png?context=bWFzdGVyfGltYWdlc3wxOTIwMzZ8aW1hZ2UvcG5nfGltYWdlcy9oNTYvaDc5Lzg3OTc0NDM2NTM2NjIucG5nfGY4MWEzMDQ2Njc0NTAyOTg0YWFiOThhNjk1MWRlMjk5MGVkZGRhYWYwYzc1MjRjYjkxNDllMjU4NmU4M2QxOWE',
        image5: 'https://www.aesop.com/medias/Aesop-Hair-Rose-Hair-Scalp-Moisturising-Masque-120mL-medium.png?context=bWFzdGVyfGltYWdlc3wyODQ2MTF8aW1hZ2UvcG5nfGltYWdlcy9oYWEvaDkzLzg4MDc0MjI4NTMxNTAucG5nfDgzOTY3ODUzNjY1MDNkNmRkNmE3YzUzZTAwMDM1M2VjNjk0Nzc4YTVmZmIwYTk3YTEzYmMxNzY3YThjYTI2ZTk',
        createdBy: users[3]._id,
        products: [
          {
            name: 'Parsley Seed Facial Cleanser',
            image: 'https://www.aesop.com/medias/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png?context=bWFzdGVyfGltYWdlc3wzNDYwMTh8aW1hZ2UvcG5nfGltYWdlcy9oYWMvaDIxLzg4MTUwMjM1ODczNTgucG5nfGFlYmNhMjRiM2Q2NWMzZTA1ZjljOTEyZmMxYmUyMTMyZDgyYjY4MGJlODU2OWEyNjkzYWQ0ZTBmMDY0NmQ1NjQ',
            rating: '★★★★★',
            createdBy: users[3]._id
          }, {
            name: 'Fabulous Face Oil',
            image: 'https://www.aesop.com/medias/Aesop-Skin-Fabulous-Face-Oil-25mL-large.png?context=bWFzdGVyfGltYWdlc3wxOTcyNzR8aW1hZ2UvcG5nfGltYWdlcy9oNTgvaGFhLzg3OTc0Mzc1MjYwNDYucG5nfDMzMWNlYWMyN2FiZWQ2YzhhNzM3Yjg5MjA2ZDFiYTM1ZDZkOGZhMDkxNmU4MjEwMGU2YTI3OTViNDM4ODRiZTY',
            rating: '★★★★★',
            createdBy: users[1]._id
          }, {
            name: 'Chamomile Concentrate Anti-blemish Masque',
            image: 'https://www.aesop.com/medias/Aesop-Skin-Chamomile-Concentrate-Anti-Blemish-Masque-60mL-large.png?context=bWFzdGVyfGltYWdlc3wyOTg3NjF8aW1hZ2UvcG5nfGltYWdlcy9oYmUvaGUwLzg3OTc0MzY4Mzc5MTgucG5nfDk5NjIwYTAyMDNkMzc4MDNhNTgyNWQ3NmFlNTZkMWRkMzliMDljNjk3MDZjYWIwZWIzMDU3ZmVjMTJiOGVkYWI',
            rating: '★★★★★',
            createdBy: users[1]._id
          }
        ],
        comments: [
          {
            text: 'All of aesop\'s products are incredible! My favourtie is the face oil, it is so moisturising.',
            rating: '★★★★★',
            createdBy: users[5]._id
          }, {
            text: 'I tried the blemish masque and it did wonders for my skin',
            rating: '★★★★★',
            createdBy: users[2]._id
          }, {
            text: 'The lip cream is so good for chapped lips!',
            rating: '★★★★★',
            createdBy: users[4]._id
          }
        ]

      }, {
        name: 'Too Faced',
        categories: ['beauty'],
        about: 'Many Too Faced products are completely vegan, including its brushes which are synthetic rather than made from animal hair. The brand is also cruelty free.',
        website: 'https://www.toofaced.com/',
        priceRange: '££',
        image1: 'https://aemon.co.uk/2569-large_default/too-faced-boss-lady-beauty-agenda-make-up-palette-mascara-lipstick.jpg',
        image2: 'https://www.toofaced.com/dw/image/v2/BBWM_PRD/on/demandware.static/-/Sites-master-catalog/default/dwee7f9fcd/images/hi-res/70241_1.png?sw=243&sh=243&sm=fit',
        image3: 'https://www.toofaced.com/dw/image/v2/BBWM_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcae7dbd0/images/hi-res/41038_1.png?sw=243&sh=243&sm=fit',
        image4: 'https://www.toofaced.com/dw/image/v2/BBWM_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3328f189/images/hi-res/70228_1.png?sw=243&sh=243&sm=fit',
        image5: 'https://www.toofaced.com/dw/image/v2/BBWM_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5c767400/images/hi-res/90645_1.png?sw=243&sh=243&sm=fit',
        createdBy: users[5]._id,
        products: [
          {
            name: 'Chocolate and Gold Eye Palette',
            image: 'https://www.toofaced.com/dw/image/v2/BBWM_PRD/on/demandware.static/-/Sites-master-catalog/default/dw252249b9/images/hi-res/41039_1.png?sw=243&sh=243&sm=fit',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Too Faced have some really great products',
            rating: '★★★★',
            createdBy: users[2]._id
          }
        ]

      }, {
        name: 'Bare Minerals',
        categories: ['beauty'],
        about: 'BareMinerals doesn\'t test on animals or work with any manufactures that do so. The brand\'s products are mostly vegan but its natural haired brushes use goat and pony hair. However, there are synthetic alternatives available.',
        website: 'https://www.bareminerals.co.uk/',
        priceRange: '££',
        image1: 'http://www.boots.com/resource/image/959294/estore_webMD/650/315/90b910c8661a506eaaeca0f2cfaa72f/TE/2017-09-bare-minerals-bt-sps-01.jpg',
        image2: 'https://s7d3.scene7.com/is/image/BareEscentuals/85963_1',
        image3: 'https://s7d3.scene7.com/is/image/BareEscentuals/82819?$sharpen1$&wid=345&hei=345',
        image4: 'https://s7d3.scene7.com/is/image/BareEscentuals/47627?$sharpen1$&wid=345&hei=345',
        image5: 'https://s7d3.scene7.com/is/image/BareEscentuals/82877?$sharpen1$&wid=345&hei=345',
        createdBy: users[2]._id,
        products: [
          {
            name: 'Ageless Serum Duo',
            image: 'https://s7d3.scene7.com/is/image/BareEscentuals/84936?$sharpen1$&wid=345&hei=345',
            rating: '★★★★★',
            createdBy: users[1]._id
          }
        ],
        comments: [
          {
            text: 'All of the bare minerals products feel so good on the skin',
            rating: '★★★★★',
            createdBy: users[2]._id
          }
        ]

      }, {
        name: 'Becca Cosmetics',
        categories: ['beauty'],
        about: 'Not only is Becca Cosmetics cruelty free, the brand also says it is participating in research to show that cruelty-free methods are more relevant and reliable than animal testing.',
        website: 'https://www.beccacosmetics.com/',
        priceRange: '££',
        image1: 'https://hips.hearstapps.com/bpc.h-cdn.co/assets/16/12/1600x800/landscape-1458661285-becca-cosmetics-skincare.jpg?resize=768:*',
        image2: 'https://d1g7p5gdkuk5bn.cloudfront.net/media/catalog/product/cache/1/small_image/620x700/040ec09b1e35df139433887a97daa66f/h/y/hydramist_powder_angledcap_1400x1400_v2.png',
        image3: 'https://d1g7p5gdkuk5bn.cloudfront.net/media/catalog/product/cache/1/small_image/620x700/040ec09b1e35df139433887a97daa66f/b/a/backlightprimingfilter.png',
        image4: 'https://d1g7p5gdkuk5bn.cloudfront.net/media/catalog/product/cache/1/small_image/620x700/040ec09b1e35df139433887a97daa66f/2/_/2_slbp_pinkhaze_1400x1400_2.png',
        image5: 'https://d1g7p5gdkuk5bn.cloudfront.net/media/catalog/product/cache/1/small_image/620x700/040ec09b1e35df139433887a97daa66f/4/_/4_1400x1400-_0004_lush-lip-pack-_chai-creme_1.png',
        createdBy: users[1]._id,
        products: [
          {
            name: 'Backlight Priming Filter',
            image: 'https://d1g7p5gdkuk5bn.cloudfront.net/media/catalog/product/cache/1/small_image/620x700/040ec09b1e35df139433887a97daa66f/b/a/backlightprimingfilter.png',
            rating: '★★★★★',
            createdBy: users[1]._id
          }
        ]

      }, {
        name: 'Hourglass',
        categories: ['beauty'],
        about: 'Hourglass prides itself on its blend of "ethics and aesthetics". Many of its products are developed without parabens, sulfates and gluten (for anyone allergic), and they are never tested on animals. Its brushes are also vegan and a list of all vegan Hourglass products can be found on the brand\'s website.',
        website: 'https://www.beccacosmetics.com/',
        priceRange: '££',
        image1: 'https://www.hourglasscosmetics.com/media/catalog/category/hourglass-cosmetics-travel-makeup-collection.jpg',
        image2: 'https://www.hourglasscosmetics.com/media/catalog/product/cache/1/image/744x950/9df78eab33525d08d6e5fb8d27136e95/v/a/vanish-seamless-finish-foundation-stick-nude_2.jpg',
        image3: 'https://www.hourglasscosmetics.com/media/catalog/product/cache/1/image/744x950/9df78eab33525d08d6e5fb8d27136e95/v/a/vanish-seamless-finish-foundation-makeup-brush.jpg',
        image4: 'https://www.hourglasscosmetics.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/a/m/ambient-lighting-palette-contouring-highlighting-face-makeup.jpg',
        image5: 'https://www.hourglasscosmetics.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/v/e/veil-mineral-primer-makeup-primer.jpg',
        createdBy: users[3]._id,
        products: [
          {
            name: 'Lip Treatment Oil',
            image: 'https://www.hourglasscosmetics.com/media/catalog/product/324x414//n/o/no_28_lip_treatment_oil_1.jpg',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ],
        comments: [
          {
            text: 'The best lip treatment you can get and it\'s completely vegan',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            text: 'I love all these products',
            rating: '★★★★★',
            createdBy: users[5]._id
          }
        ]

      }, {
        name: 'Barry M',
        categories: ['beauty'],
        about: 'Barry M has never tested on animals and is committed to ending animal testing worldwide. Many of its products are vegan and are marked as such on its website.',
        website: 'https://www.barrym.com/',
        priceRange: '£',
        image1: 'http://2.bp.blogspot.com/-MTrVz0SG32c/VNi8QFF-dzI/AAAAAAAADpo/YgGmiwl3Gx4/s1600/barry-m-speedy-quick-dry.jpg',
        image2: 'https://www.barrym.com/img/products/288/ranges/711/big.jpg',
        image3: 'https://www.barrym.com/img/products/117/ranges/412/big.jpg',
        image4: 'https://www.barrym.com/img/products/32/ranges/115/big.jpg',
        image5: 'https://www.barrym.com/img/products/204/ranges/big.jpg',
        createdBy: users[5]._id,
        comments: [
          {
            text: 'Love that Barry M is made ethically',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ]

      }, {
        name: 'Charlotte Tilbury',
        categories: ['beauty'],
        about: 'Charlotte Tilbury doesn\'t test on animals and nor do its suppliers. The brand isn\'t completely vegan as it uses carmine (a bright-red pigment made from insects), but it has vegan options.',
        website: 'http://www.charlottetilbury.com/',
        priceRange: '£££',
        image1: 'https://n.nordstrommedia.com/id/79fddb6d-aea3-4c46-b3e4-b462edd5a79f.jpeg?w=1334&h=620',
        image2: 'http://media.charlottetilbury.com/catalog/product/cache/1/small_image/296x340/9df78eab33525d08d6e5fb8d27136e95/c/h/charlotte-tilbury-filmstar-bronze-and-blush-pack-shot_1.jpg',
        image3: 'http://media.charlottetilbury.com/catalog/product/cache/1/small_image/296x340/9df78eab33525d08d6e5fb8d27136e95/c/h/charlotte-tilbury-skincare-brightening-youth-glow-product_002_.jpg',
        image4: 'http://media.charlottetilbury.com/catalog/product/cache/1/small_image/296x340/9df78eab33525d08d6e5fb8d27136e95/c/h/charlotte_tilbury_beauty_light_wand_closed.jpg',
        image5: 'http://media.charlottetilbury.com/catalog/product/cache/1/small_image/296x340/9df78eab33525d08d6e5fb8d27136e95/m/a/magic-cream1.jpg',
        createdBy: users[2]._id,
        products: [
          {
            name: 'Filmstar Bronze & Glow',
            image: 'http://media.charlottetilbury.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/filmstar-bronze-and-glow_open_1_1.jpg',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            name: 'Luxury Palette',
            image: '  http://media.charlottetilbury.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/p/pp-quad_the-vinatge-vamp_1_1.jpg',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'You\'ll never use another make up brand after using Charlotte Tilbury',
            rating: '★★★★★',
            createdBy: users[0]._id
          }, {
            text: 'I love all these products',
            rating: '★★★★★',
            createdBy: users[5]._id
          }
        ]

      }, {
        name: 'Kat Von D Beauty',
        categories: ['beauty'],
        about: 'A large number of Kat Von D products are vegan, including brushes. The brand has a “vegan alert” label on its website and recently announced it is reformulating all its products to make them vegan.',
        website: 'https://www.katvondbeauty.com/',
        priceRange: '£££',
        image1: 'https://media.gettyimages.com/photos/ashley-james-attends-the-launch-of-kat-von-d-beauty-at-debenhams-on-picture-id612893944',
        image2: 'https://www.katvondbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_KVD/default/dw7294f482/hi-res/20012_2013.jpg?sw=290',
        image3: 'https://www.katvondbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_KVD/default/dw1d0388bb/hi-res/22131V1.jpg?sw=290',
        image4: 'https://www.katvondbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_KVD/default/dwf2a0e0c7/hi-res/10008_1017.jpg?sw=290',
        image5: 'https://www.katvondbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_KVD/default/dwbd7175e9/hi-res/22117V1.jpg?sw=290',
        createdBy: users[5]._id,
        products: [
          {
            name: 'Lock-it Foundation',
            image: 'https://www.katvondbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_KVD/default/dwa766874e/hi-res/20005_2052N.jpg?sw=160',
            rating: '★★★★',
            createdBy: users[2]._id
          }
        ]


      }, {
        name: 'Lush',
        categories: ['beauty'],
        about: 'Lush is well-known for its wide range of vegan and organic products and its robust stance against animals testing. It also has a strong environmental policy, selling many cosmetics without plastic packaging. It is also a leader in solid cosmetics (such as shampoo, deodorant and recently, even the world\'s first solid mouthwash!), helping to reduce the amount of wasted water.',
        website: 'https://uk.lush.com/',
        priceRange: '£',
        image1: 'https://chloeabigail.co.uk/wp-content/uploads/2017/01/Lush-image-final-1.jpg',
        image2: 'https://res.cloudinary.com/lush/image/upload/s--5CZIOabQ--/c_fill,h_340,q_jpegmini,w_340/v1/lush_content/products/main/2017/05/new_shampoo_bar_be_cruelty_free_solid_shot_1.jpg?itok=TlSRzzUN',
        image3: 'http://img.allw.mn/content/2013/10/21101550_7036.jpg',
        image4: 'http://images.totalbeauty.com/uploads/tx_userproducts/200/tbp500891_v0_l.jpg',
        image5: 'https://media1.popsugar-assets.com/files/thumbor/98Td7WvlQ3qbTDG3jeHBy-PuIvo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/08/02/874/n/40039897/7f946ddc59822f01dd47b0.98728476_edit_img_image_43824340_1501646976/i/Lush-Cosmetics-Bestsellers.jpg',
        createdBy: users[1]._id,
        products: [
          {
            name: 'Shampoo Bar',
            image: 'https://res.cloudinary.com/lush/image/upload/s--RW4cR9U9--/c_fill,h_200,q_jpegmini,w_200/v1/products/main/2014/10/Jason_argan_oils_web.jpg?itok=0QDZzDaK',
            rating: '★★★★',
            createdBy: users[2]._id
          }
        ],
        comments: [
          {
            text: 'Revolutionary solid shampoo, works so well! And so much less waste! LOVE IT <3',
            rating: '★★★★',
            createdBy: users[1]._id
          }
        ]

      }, {
        name: 'NYX',
        categories: ['beauty'],
        about: 'NYX Cosmetics is cruelty free. It has been acknowledged by animal rights organisation PETA as being dedicated to remaining so, and awarded for its commitment to not selling its products in China.',
        website: 'https://www.nyxcosmetics.co.uk/',
        priceRange: '££',
        image1: 'https://cdn1.feelunique.com/img/content/NYX%20LIGHTBOX_700%20x%20400mm-V3_1497860540.jpg',
        image2: 'https://www.nyxcosmetics.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dw98d18f1b/ProductImages/Face/Stay_Matte_But_Not_Flat_Liquid_Foundation/staymattebutnotflatliquidfoundation_main.jpg?sw=390&sh=390&sm=fit',
        image3: 'https://www.nyxcosmetics.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dw51143853/ProductImages/2017/Face/Total_Control_Drop_Foundation/800897068752_totalcontroldropfoundation_alabaster_main.jpg?sw=390&sh=390&sm=fit',
        image4: 'https://www.nyxcosmetics.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dwb2c9c6d4/ProductImages/Face/Highlight_Contour_Palette/800897836245_highlightcontourpalette_main.jpg?sw=390&sh=390&sm=fit',
        image5: 'https://www.nyxcosmetics.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dwbbca9dd2/ProductImages/Lips/Slim_Lip_Pencil/slimlippencil_main.jpg?sw=390&sh=390&sm=fit',
        createdBy: users[0]._id,
        products: [
          {
            name: 'Illuminating Powder',
            image: 'https://www.nyxcosmetics.co.uk/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dwa7c6b6cf/ProductImages/2017/Face/Away_We_Glow_Illuminating_Powder/awayweglowilluminatingpowder_main.jpg?sw=390&sh=390&sm=fit',
            rating: '★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Great products but not the best!',
            rating: '★★★',
            createdBy: users[1]._id
          }
        ]

      }, {
        name: 'Nügg',
        categories: ['beauty'],
        about: 'All products by U.S. brand Nugg are cruelty-free and formulated with over 90% natural or naturally-derived ingredients.',
        website: 'https://www.nuggbeauty.com/',
        priceRange: '££',
        image1: 'https://3.bp.blogspot.com/-516w11tkRBI/VyHl8gbQJ0I/AAAAAAAALoc/EHQXwdCjlh8WbiBDfa-yBshpcs6N7L1cACLcB/s1600/NUGG.jpg',
        image2: 'https://cdn.shopify.com/s/files/1/0438/6525/products/1N0A6195-2_medium.jpg?v=1518669764',
        image3: 'https://cdn.shopify.com/s/files/1/0438/6525/products/DSC09875_1_medium.jpg?v=1512040263',
        image4: 'https://cdn.shopify.com/s/files/1/0438/6525/products/111317_NuggHoliday_01_020_V2_medium.jpg?v=1511216861',
        image5: 'https://cdn.shopify.com/s/files/1/0438/6525/products/Copy_of_Copy_of_Copy_of_Instagram_Post_Untitled_Design_medium.png?v=1519788938',
        createdBy: users[5]._id,
        products: [
          {
            name: 'Lip Scrub and Smoother',
            image: 'https://cdn.shopify.com/s/files/1/0438/6525/products/1N0A6195-2_large.jpg?v=1520049991',
            rating: '★★★',
            createdBy: users[3]._id
          }
        ],
        comments: [
          {
            text: 'Helped my lips SO much!',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ]

      }, {
        name: 'Pai',
        categories: ['beauty'],
        about: 'All Pai products are certified vegan and cruelty free by Cruelty Free International, and neither the products nor raw materials used to make them are ever tested on animals. The brand is also certified organic by the Soil Association.',
        website: 'https://www.paiskincare.com/',
        priceRange: '£££',
        image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5Xgqke22yQ2N_79bm0ByFPKC5u2TYrOIL7P-zn47IGdEhoVWqw',
        image2: 'https://cdn.shopify.com/s/files/1/1282/4197/products/AgeConfidenceOil_medium.png?v=1499775849',
        image3: 'https://cdn.shopify.com/s/files/1/1282/4197/products/Rosehip_Mask_medium.png?v=1499776790',
        image4: 'https://cdn.shopify.com/s/files/1/1282/4197/products/Exfoliator_1_medium.png?v=1499776183',
        image5: 'https://cdn.shopify.com/s/files/1/1282/4197/products/Cham_Day_Cream_medium.png?v=1508161175',
        createdBy: users[2]._id,
        products: [
          {
            name: 'Avocado & Jojoba Hydrating Day Cream',
            image: 'https://cdn.shopify.com/s/files/1/1282/4197/products/Avo_Day_Cream_medium.png?v=1508161161',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ],
        comments: [
          {
            text: 'such hudrating products for your skin!',
            rating: '★★★★★',
            createdBy: users[3]._id
          }, {
            text: 'I love Pai products',
            rating: '★★★★★',
            createdBy: users[1]._id
          }
        ]

      }, {
        name: 'Odacité',
        categories: ['beauty'],
        about: 'When Odacité\'s founder Valérie Gradury was diagnosed with breast cancer in 2004, she decided to eliminate all toxins from her diet and environment. Five years later her organic skin care brand was born. Odacité\'s collection of Serum Concentrates contain skin-essential nutrients to re-establish the skin\'s equilibrium.',
        website: 'https://odacite.com/',
        priceRange: '£££',
        image1: 'https://cdn.cultbeauty.co.uk/resized/840x/slots-img/bra/brandlanding_odacite_840x400-2sl1q.jpg',
        image2: 'https://cdn.shopify.com/s/files/1/0671/5641/products/DeliveryCreme_large.png?v=1514998327',
        image3: 'https://cdn.shopify.com/s/files/1/1282/4197/products/Rosehip_Mask_medium.png?v=1499776790',
        image4: 'https://cdn.shopify.com/s/files/1/0671/5641/products/AOW_large.jpg?v=1489449275',
        image5: 'https://cdn.shopify.com/s/files/1/0671/5641/products/HydraPurify_MintGreenTea_2_large.png?v=1514997321',
        createdBy: users[3]._id,
        products: [
          {
            name: 'Green Tea Lemongrass Serum Concentrate',
            image: 'https://cdn.shopify.com/s/files/1/0671/5641/products/Gt_L_Bottle_Drop_large.jpg?v=1520274341',
            rating: '★★★★★',
            createdBy: users[0]._id
          }
        ],
        comments: [
          {
            text: 'Odacite is amazing!!',
            rating: '★★★★★',
            createdBy: users[3]._id
          }
        ]

      }]);
  })
  .then((brand) => {
    console.log(`${brand.length} brands created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
