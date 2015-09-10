var React = require('react');
var SearchForm = require('../components/SearchForm');
var listStore = require('../stores/listStore');

var Home = React.createClass({
    componentDidMount: function () {
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        // this.context.router.transitionTo('list');
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