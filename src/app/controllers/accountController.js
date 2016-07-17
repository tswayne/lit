const catsClient = require('./../../lib/clients/cats-client');

module.exports.login = {
  handler:  function(request, reply) {
    catsClient.createAccount(request.payload, (err, response) => {
      if (err) {throw err;}
      reply(response);
    })
  }
};

module.exports.register = {
  handler:  function(request, reply) {
    catsClient.createAccount(request.payload, (err, response) => {
      if (err) {throw err;}
      reply(response);
    })
  }
};
