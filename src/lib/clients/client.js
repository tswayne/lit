'use strict';

const http = require('request');
const url = require('url');
const uuid = require('node-uuid');

const getOptions = (url) => {
  return {
    url: url,
    headers: {
      'from': 'lit',
      'request-id': uuid.v1()
    }
  };
};

module.exports.parseError = (err, response) => {
  if (err) {
    return err;
  }
  if (response.error) {
    return new Error(response.error);
  }
  return null;
};

module.exports.buildUrl = function(host, port, path, params) {
  return url.format({
    protocol: 'http',
    hostname: host,
    port: port,
    pathname: path,
    query: params
  })
};

module.exports.get = function(url, callback) {
  console.log('Making GET request: ' + url);
  http(getOptions(url), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null, body)
    } else {
      callback(error);
    }
  })
};

module.exports.post = function(url, payload, callback) {
  let options = getOptions(url);
  options.json = payload;
  options.method = 'POST';
  console.log('Making POST request: ' + url, payload);
  http(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null, body)
    } else {
      callback(error, {});
    }
  })
};
