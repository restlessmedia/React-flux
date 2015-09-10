var React = require('react');
var SearchForm = require('../components/SearchForm');
var listStore = require('../stores/listStore');
var Router = require('../router/Router');

var Home = React.createClass({
    componentDidMount: function () {
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        Router.transitionTo('list');
    },
    render: function () {
        return (
            <div>
                <div>Home</div>
                <SearchForm />
            </div>
        )
    }
});

module.exports = Home;