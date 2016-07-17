'use strict';
const client = require('./client');
const spiderweb = require('spiderweb-client');

module.exports.getMap = function(id, callback) {
  const config = spiderweb.getConfig();
  const port = config.geodude.port;
  const host = config.geodude.host;
  const path = 'map/' + id;
  const url = client.buildUrl(host, port, path);
  return client.get(url, callback)
};
