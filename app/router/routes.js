var React = require('react');
var Router = require('react-router');
var List = require('../components/List');
var Home = require('../components/Home');
var Display = require('../components/Display');
var App = require('../components/App');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// for search, if we don't exclude the backslash, it doubles up when using <link />?!

module.exports = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="list" path="/list/:page?" handler={List}/>
		<Route name="search" path="/search:page?/:author?/:text?" handler={List}/>
        <Route name="display" path="/display/:id" handler={Display}/>
    </Route>
);