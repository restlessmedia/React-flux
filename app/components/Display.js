var React = require('react');
var displayStore = require('../stores/displayStore');
var actions = require('../actions/actions');
var Link = require('react-router').Link;

var Display = React.createClass({
    getState: function () {
        return {
            item: displayStore.get(this.props.params.id),
            loading: false
        }
    },
    getInitialState: function () {
        return this.getState();
    },
    componentDidMount: function () {
        if (!this.getState().item) {
            actions.get(this.props.params.id);
        }
    },
    componentWillMount: function () {
        displayStore.on('change', this.handleChange);
        displayStore.on('pending', this.handlePending);
    },
    componentWillUnmount: function () {
        displayStore.off('change');
        displayStore.off('pending');
    },
    handlePending: function () {
        this.setState({
            loading: true
        });
    },
    handleChange: function () {
        this.setState(this.getState());
    },
    renderItem: function () {
        return <div key="data">
            <img src={this.state.item.src} width="50" height="50" />
            <p>{this.state.item.title}</p>
            <p>{this.state.item.description}</p>
        </div>;
    },
    render: function () {
        if (this.state.loading)
            return <div>Loading...</div>;

        if (!this.state.item)
            return <div>No data</div>;

        return (
            <div>
                {this.renderItem()}
                <Link to="list" params={{page: 1}}>Back</Link>
            </div>
        );
    }
});

module.exports = Display;