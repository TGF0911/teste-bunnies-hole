const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.post('/products', ProductController.create); //Funciona
routes.get('/products', ProductController.index); //Funciona
routes.get('/products/search', ProductController.search); //Tem que ver como faz
routes.get('/products/sort', ProductController.sortBy); //Tem que começar
routes.get('/products/filter', ProductController.filter); //Funciona
routes.put('/product/:id', ProductController.update); // Parcial (Só pra alguns dados) (Talvez tenha que enviar tudo denovo pelo front)
routes.delete('/product/:id', ProductController.delete); //Funciona

module.exports = routes;