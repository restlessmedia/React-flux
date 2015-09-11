var React = require('react');
var router = require('./router/router');
var routes = require('./router/routes');

router.addRoutes(routes);

router.run(function (Handler) {
    React.render(<Handler/>, document.body);
});