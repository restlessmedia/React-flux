var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var router = Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});

module.exports = router;