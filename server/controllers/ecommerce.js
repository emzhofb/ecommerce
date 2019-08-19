const Ecommerce = require('../models/ecommerce');

exports.getEcommerce = (req, res, next) => {
  const error = e => {
    throw e;
  };

  Ecommerce.find()
    .then(products => {
      if (products) {
        return res.status(200).json(products);
      }

      error("products can't be found!");
    })
    .catch(err => {
      return res.status(406).json({ message: err });
    });
};

exports.postEcommerce = (req, res, next) => {
  const {
    id,
    title,
    rate,
    description,
    price,
    brand,
    detail_product
  } = req.body;
  const ecommerce = new Ecommerce({
    id,
    title,
    rate,
    description,
    price,
    brand,
    detail_product
  });

  ecommerce
    .save()
    .then(() => {
      return res.status(200).json({
        status: 'SUCCESS',
        data: {
          id,
          title,
          rate,
          description,
          price,
          brand,
          detail_product
        }
      });
    })
    .catch(err => res.status(406).json({ message: "can't add product" }));
};
