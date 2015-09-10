var React = require('react');
var listStore = require('../stores/listStore');
var actions = require('../actions/actions');
var Link = require('react-router').Link;

var List = React.createClass({
    getList: function () {
        return listStore.getList();
    },
    getInitialState: function () {
        return {
            items: this.getList()
        }
    },
    componentDidMount: function () {
        actions.getData();
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState({
            items: this.getList()
        });
    },
    renderItems: function () {
        return this.state.items.map(function (item) {
            return <li>
                <Link to="display" params={{id: item.id}}>{item.title}</Link>
            </li>;
        });
    },
    renderList: function () {
        if (!this.state.items)
            return;

        return <ul>{this.renderItems()}</ul>;
    },
    render: function () {
        return (
            <div>
                {this.renderList()}
                <Link to="/">Home</Link>
            </div>
        )
    }
});

module.exports = List;