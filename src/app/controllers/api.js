'use strict';
var client = require('../../lib/clients/geodude-client');

module.exports.map = {
  handler:  function(request, reply) {
    request.server.methods.getMap(request.params.id, reply);
  }
};
