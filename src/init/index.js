const plugins = require('./plugins');
const routes = require('./routes');
const serverMethods = require('./server-methods');

module.exports.bootstrap = function(server, callback) {
  plugins.registerPlugins(server, function(err) {
    if (err) {throw err;}
    routes.setupRoutes(server);
    serverMethods.registerServerMethods(server);
    callback();
  })
};
