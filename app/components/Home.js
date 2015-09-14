var React = require('react');
var SearchForm = require('../components/SearchForm');
var router = require('../router/router');
var actions = require('../actions/actions');

var Home = React.createClass({
    handleSubmit: function (params) {
		params.search = true;
        router.transitionTo('search', params);
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