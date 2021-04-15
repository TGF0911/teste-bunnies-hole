const db = require('mongoose');

const ProductSchema = db.Schema({
  name: String,
  type: String,
  value: Number,
  rating: Number,
  createdAt: { type: Date, default: Date.now() },
  thumbnail: String
});

module.exports = db.model('Product', ProductSchema);