const Product = require('../models/Product');

const utils = require('../utils/productUtils');

module.exports = {
  async create(req, res) {
    const { name, type, value, rating, thumbnail } = req.body;
    const product = await Product.create({
      name,
      type,
      value,
      rating: rating || 0.0,
      thumbnail: thumbnail || ""
    })
    return res.json(product)
  },

  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  },

  async search(req, res) {
    const searchParams = req.query.searchParams;
    const products = await Product.find();
    const search = utils.search(searchParams, products);
    return res.json(search);
  },

  async sortBy(req, res) {
    const filter = req.query.sort;
    const products = await Product.find();
    const sort = utils.orderBy(filter, products);
    return res.json(sort);
  },

  async filter(req, res) {
    const filter = req.query.filter;
    const products = await Product.find({ type: filter });
    return res.json(products);
  },

  async update(req, res) {
    const id = req.params.id;
    const { name, value, thumbnail } = req.body;
    const product = await Product.findOneAndUpdate({ _id: id }, {
      name,
      value,
      thumbnail : thumbnail || ""
    })
    return res.json(product);
  },

  async delete(req, res) {
    const id = req.params.id;
    await Product.findByIdAndRemove({ _id: id });
    return res.status(201);
  }
}