var storeUtils = require('../utils/storeUtils');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var items;

var store = storeUtils.createStore({
    getList: function () {
        return items;
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    if (action.response === appConstants.action.PENDING) {
        store.emitPending();
        return true;
    }

    switch (action.actionType) {
        case appConstants.api.GET_DATA:
        case appConstants.api.SEARCH:
            items = action.response.body;
            break;
        default:
            return true;
    }

    store.emitChange();

    return true;
});

module.exports = store;