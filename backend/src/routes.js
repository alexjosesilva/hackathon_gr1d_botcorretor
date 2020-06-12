const { Router } = require('express');

const ClientController = require('./app/controllers/ClientController');
const ServicesController = require('./app/controllers/ServicesController');
const SinisterController = require('./app/controllers/SinisterController');

const routes = Router();


routes.post('/client', ClientController.create);
routes.get('/client', ClientController.index);

routes.post('/service/:id/client', ServicesController.create);
routes.get('/service', ServicesController.index);

routes.post('/sinister/:id/client', SinisterController.create);
routes.get('/sinister', SinisterController.index);


module.exports = routes;