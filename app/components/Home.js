var React = require('react');
var SearchForm = require('../components/SearchForm');
var listStore = require('../stores/listStore');
var router = require('../router/router');
var actions = require('../actions/actions');

var Home = React.createClass({
    componentDidMount: function () {
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        router.transitionTo('list');
    },
    handleSubmit: function (params) {
        actions.search(params);
        router.transitionTo('list', {page: 1});
    },
    render: function () {
        return (
            <div>
                <div>Home</div>
                <SearchForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
});

module.exports = Home;