'use strict';

const Hapi = require('hapi');
const init = require('./src/init');
const spiderweb = require('spiderweb-client');
// Create a server with a host and port
const server = new Hapi.Server({
  cache: {
    name: 'redisCache',
    engine: require('catbox-redis')
  }
});



spiderweb.setupConfig(function(err, config) {
  if (err) {
    throw err;
  }
  server.connection({
    host: config.lit.host,
    port: config.lit.port
  });

  init.bootstrap(server, function () {
    // Start the server
    server.start((err) => {

      if (err) {
        throw err;
      }

      console.log('Server running at:', server.info.uri);
    });
  });
});
