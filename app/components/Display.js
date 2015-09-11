var React = require('react');
var displayStore = require('../stores/displayStore');
var actions = require('../actions/actions');
var Link = require('react-router').Link;

var Display = React.createClass({
    getState: function () {
        return {
            item: displayStore.get(this.props.params.id)
        }
    },
    getInitialState: function () {
        return this.getState();
    },
    componentDidMount: function () {
        if (!this.getState().item) {
            actions.get(this.props.params.id);
        }
        displayStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        displayStore.off('change');
    },
    handleChange: function () {
        this.setState(this.getState());
    },
    renderItem: function () {
        if (!this.state.item)
            return <div>Loading...</div>;

        return <div key="data">
            <img src={this.state.item.src} width="50" height="50" />
            <p>{this.state.item.title}</p>
            <p>{this.state.item.description}</p>
        </div>;
    },
    render: function () {
        return (
            <div>
                {this.renderItem()}
                <Link to="list" params={{page: 1}}>Back</Link>
            </div>
        );
    }
});

module.exports = Display;