var React = require('react');
var displayStore = require('../stores/displayStore');
var actions = require('../actions/actions');
var Link = require('react-router').Link;

var Display = React.createClass({
    get: function () {
        return displayStore.get(this.props.params.id)
    },
    getInitialState: function () {
        return {
            item: this.get()
        }
    },
    componentDidMount: function () {
        if (!this.get()) {
            actions.get(this.props.params.id);
        }
        displayStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        displayStore.off('change');
    },
    handleChange: function () {
        this.setState({item: this.get()});
    },
    renderItem: function () {
        if (!this.state.item)
            return;

        return <div key="data">
            <img src={this.state.item.src} />
            <p>{this.state.item.title}</p>
            <p>{this.state.item.description}</p>
            <Link to="list">List</Link>
        </div>;
    },
    render: function () {
        return (
            <div>
                {this.renderItem()}
            </div>
        );
    }
});

module.exports = Display;