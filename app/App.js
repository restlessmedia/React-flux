var React = require('react');
var List = require('./components/List');

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                test
                <List />
            </div>
        )
    }
});

React.render(
    <App />,
    document.getElementById('app')
);