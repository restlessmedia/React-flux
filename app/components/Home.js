var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <div>Home</div>
                <Link to="list">List</Link>
            </div>
        )
    }
});

module.exports = Home;