var Minivents = require('minivents');
var changeEvent = 'change';
var pendingEvent = 'pending';

var createStore = function (obj) {
    var store = obj || {};
    Minivents(store);
    store.emitChange = function () {
        this.emit(changeEvent);
    };
    store.emitPending = function () {
        this.emit(pendingEvent);
    };
    return store;
};

module.exports = {
    createStore: createStore
};