var React = require('react');
var listStore = require('../stores/listStore');
var listActions = require('../actions/listActions');
var Router = require('react-router');

var Link = Router.Link;

var List = React.createClass({
    getInitialState: function () {
        return listStore.getState();
    },
    componentDidMount: function () {
        listActions.getData();
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState(listStore.getState());
    },
    render: function () {
        var listItems = this.state.items.map(function (item) {
            return <li>{item.src}</li>;
        });
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                <Link to="/">Home</Link>
            </div>
        )
    }
});

module.exports = List;