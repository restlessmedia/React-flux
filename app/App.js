var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var List = require('./components/List');
var Home = require('./components/Home');
var Display = require('./components/Display');
var Header = require('./components/Header');
var Footer = require('./components/Footer');

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
                <Header />
                <TransitionGroup component="div" className="content" transitionName="page">
                    <RouteHandler key={name}/>
                </TransitionGroup>
                <Footer />
            </div>
        )
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="list" path="/list" handler={List}/>
        <Route name="display" path="/display/?:id" handler={Display}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});