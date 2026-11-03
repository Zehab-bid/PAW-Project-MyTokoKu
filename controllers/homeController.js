const ProdukModel = require('../models/produk.model');
const config = require('../config');

exports.index = (req, res) => {
  res.render('index', {
    judul: `${config.appName} - Toko Produk Online`,
    namaToko: config.appName,
    produk: ProdukModel.getAll(),
  });
};
