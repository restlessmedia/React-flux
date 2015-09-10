var React = require('react');
var listStore = require('../stores/listStore');
var actions = require('../actions/actions');
var Link = require('react-router').Link;

var List = React.createClass({
    getState: function () {
        return {
            items: listStore.getList()
        }
    },
    getInitialState: function () {
        return this.getState();
    },
    componentDidMount: function () {
        actions.getData();
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState(this.getState());
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
                <Link to="/">Back</Link>
            </div>
        )
    }
});

module.exports = List;