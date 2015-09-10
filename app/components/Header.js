var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="list">List</Link></li>
                </ul>
            </div>
        )
    }
});

module.exports = Header;