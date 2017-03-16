const reactHelper = require('react-helper');

module.exports.action = {
  handler:  function(request, reply) {
    const App = reactHelper.renderComponent('App', {})
    reply.view('main/app', {App})
  }
};
