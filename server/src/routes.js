const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.post('/products', ProductController.create);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);
routes.get('/products', ProductController.index);
routes.get('/products/search', ProductController.search);
routes.get('/products/sortBy', ProductController.sortBy);
routes.get('/products/filter', ProductController.filter);

module.exports = routes;