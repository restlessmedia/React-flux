var React = require('react');
var listStore = require('../stores/listStore');
var actions = require('../actions/actions');
var Link = require('react-router').Link;

var List = React.createClass({
    getInitialState: function () {
        return {
            items: listStore.getList(),
            loading: false
        }
    },
    componentDidMount: function () {
        actions.getData(this.props.params);
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState(this.getInitialState());
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
            return <div>Loading...</div>;

        return <ul>{this.renderItems()}</ul>;
    },
    render: function () {
        return (
            <div>
                {this.renderList()}
                <Link to="list" params={{page: 1}}>Previous</Link>
                |
                <Link to="list" params={{page: 2}}>Next</Link>
            </div>
        )
    }
});

module.exports = List;