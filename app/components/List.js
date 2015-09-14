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
        if (!this.state.items) {
            actions.getData(this.props.params);
        }
    },
    componentWillMount: function () {
        listStore.on('change', this.handleChange);
        listStore.on('pending', this.handlePending);
    },
    componentWillUnmount: function () {
        listStore.off('change');
        listStore.off('pending');
    },
    handlePending: function () {
        this.setState({
            loading: true
        });
    },
    handleChange: function () {
        this.setState({
            items: listStore.getList(),
            loading: false
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
        return <ul>{this.renderItems()}</ul>;
    },
    render: function () {
        if (this.state.loading)
            return <div>Loading...</div>;

        if (!this.state.items)
            return <div>No data</div>;

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