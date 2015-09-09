var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var List = require('./components/List');
var Home = require('./components/Home');
var Display = require('./components/Display');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function () {
        var name = this.context.router.getCurrentPath();
        return (
            <div className="container">
                <TransitionGroup component="div" className="page" transitionName="page">
                    <RouteHandler key={name}/>
                </TransitionGroup>
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