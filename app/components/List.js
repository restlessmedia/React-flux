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
    render: function () {
        if (!this.state.items) {
            return <div></div>;
        }

        var listItems = this.state.items.map(function (item) {
            return <li>
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