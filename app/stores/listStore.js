var Minivents = require('minivents');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var items = [{}];
var changeEvent = 'change';

var store = {
    getState: function () {
        return {
            items: items
        }
    }
};

Minivents(store);

AppDispatcher.register(function (payload) {
    switch (payload.eventName) {
        case 'nextPage':
            items = payload.items;
            store.emit('change');
            break;
    }
    return true;
});

module.exports = store;