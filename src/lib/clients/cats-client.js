'use strict';
const client = require('./client');
const spiderweb = require('spiderweb-client');

module.exports.createAccount = function(payload, callback) {
  const config = spiderweb.getConfig();
  const port = config.cats.port;
  const host = config.cats.host;
  const path = 'account/create';

  const url = client.buildUrl(host, port, path);
  return client.post(url, payload, (err, response) => {
    if (client.parseError(err, response)) {
      return callback(client.parseError(err, response))
    }
    return callback(null, response)
  })
};
