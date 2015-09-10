var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var Header = require('../components/Header');
var Footer = require('../components/Footer');
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

module.exports = App;