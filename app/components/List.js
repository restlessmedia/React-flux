var React = require('react');
var listStore = require('../stores/listStore');
var listActions = require('../actions/listActions');
var Router = require('react-router');

var Link = Router.Link;

var List = React.createClass({
    getInitialState: function () {
        return {
            items: listStore.getList()
        }
    },
    componentDidMount: function () {
        listActions.getData();
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState({
            items: listStore.getList()
        });
    },
    render: function () {
        var listItems = this.state.items.map(function (item) {
            return <li key={item.id}>
                <Link to="display" params={{id: item.id}}>{item.title}</Link>
            </li>;
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