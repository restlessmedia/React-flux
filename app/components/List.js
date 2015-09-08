var React = require('react');
var listStore = require('../stores/listStore');
var listActions = require('../actions/listActions');

var List = React.createClass({
    getInitialState: function () {
        return listStore.getState();
    },
    componentDidMount: function () {
        listStore.on('change', this.handleChange);
    },
    componentWillUnmount: function () {
        listStore.off('change');
    },
    handleChange: function () {
        this.setState(listStore.getState());
    },
    handleNext: function () {
        listActions.getData();
    },
    render: function () {
        var listItems = this.state.items.map(function (item) {
            return <li>{item.src}</li>;
        });
        return (
            <div>
                <button type="button" onClick={this.handleNext}>Next page</button>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

module.exports = List;