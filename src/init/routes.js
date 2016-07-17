'use strict';
const main = require('../app/controllers/mainController');
const account = require('../app/controllers/accountController');
const assetsController = require('../app/controllers/assets');
const api = require('../app/controllers/api');

module.exports.setupRoutes = function(server) {
  server.route([
    {method: 'GET',   path: '/javascript/{path*}', config: assetsController.javascript},
    {method: 'GET',  path: '/game', config: main.action},
    {method: 'GET',  path: '/', config: main.action},
    {method: 'POST',  path: '/login', config: account.login},
    {method: 'POST',  path: '/register', config: account.register},
    {method: 'GET',  path: '/api/map/{id}', config: api.map}
  ]);
};
