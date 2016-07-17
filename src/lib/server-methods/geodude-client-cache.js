'use strict';

const geodudeClient = require('../clients/geodude-client');

const getMap = function(id, next) {
  geodudeClient.getMap(id, function(err, map) {
    return next(err, map);
  });
};

module.exports.register = function(server) {
  server.method('getMap', getMap, {
    cache: {
      cache: 'redisCache',
      expiresIn: 900000,
      generateTimeout: 1000
    }
  })
};
