var React = require('react');
var actions = require('../actions/actions');

var SearchForm = React.createClass({
    getParams: function () {
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        return {
            author: author,
            text: text
        };
    },
    handleSubmit: function (e) {
        e.preventDefault();
        actions.search(this.getParams());
    },
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = SearchForm;