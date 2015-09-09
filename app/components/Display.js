var React = require('react');
var listStore = require('../stores/listStore');
var listActions = require('../actions/listActions');
var Router = require('react-router');

var Link = Router.Link;

var Display = React.createClass({
    getInitialState: function () {
        return {
            item: listStore.get()
        }
    },
    componentDidMount: function () {
        listActions.get(this.props.params.id);
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState({item: listStore.get()});
    },
    render: function () {
        return (
            <div>
                <img src={this.state.item ? this.state.item.src : ''} />
                <p>{this.state.item ? this.state.item.title : ''}</p>
                <p>{this.state.item ? this.state.item.description : ''}</p>
                <Link to="list">List</Link>
            </div>
        )
    }
});

module.exports = Display;