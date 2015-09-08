var React = require('react');
var Router = require('react-router');
var List = require('./components/List');
var Home = require('./components/Home');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <RouteHandler/>
            </div>
        )
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="list" handler={List}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});