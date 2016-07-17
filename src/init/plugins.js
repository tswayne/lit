'use strict';

var plugins = [
  require('inert'),
  require('vision')
];

module.exports.registerPlugins = function(server, callback) {

  server.ext('onRequest', function(request, reply) {
    console.log('Receiving ' + request.method.toUpperCase() + ' - ' + request.url.path);
    return reply.continue();
  });

  server.register(plugins, function(err){
    server.views({
      engines: {
        hbs: require('handlebars')
      },
      path: 'src/app/views',
      layout: true
    });

    callback(err);
  });
};
