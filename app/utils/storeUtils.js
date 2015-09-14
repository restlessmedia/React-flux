var Minivents = require('minivents');
var changeEvent = 'change';
var pendingEvent = 'pending';

var Store = function (obj) {
    if (obj) {
        for (var member in obj) {
            if (obj.hasOwnProperty(member)) {
                this[member] = obj[member];
            }
        }
    }
    Minivents(this);
};

Store.prototype.emitChange = function () {
    this.emit(changeEvent);
};

Store.prototype.emitPending = function () {
    this.emit(pendingEvent);
};

var createStore = function (obj) {
    return new Store(obj);
};

module.exports = {
    createStore: createStore
};