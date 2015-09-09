var React = require('react');
// var CSSTransitionGroup = require('rc-css-transition-group');
var Router = require('react-router');
var List = require('./components/List');
var Home = require('./components/Home');
var Display = require('./components/Display');

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
        <Route name="list" path="/list" handler={List}/>
        <Route name="display" path="/display/?:id" handler={Display}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});