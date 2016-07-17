'use strict';

module.exports.registerServerMethods = function(server) {
  require('../lib/server-methods/geodude-client-cache').register(server);
};
