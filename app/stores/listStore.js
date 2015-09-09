var storeUtils = require('../utils/storeUtils');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var items = [];
var item;

var store = storeUtils.createStore({
    getList: function () {
        return items;
    },
    get: function () {
        return item;
    }
});

store.appDispatch = AppDispatcher.register(function (payload) {
    var action = payload.action;

    if (action.response === appConstants.action.PENDING) {
        store.emitPending();
        return true;
    }

    switch (action.actionType) {
        case appConstants.api.GET_DATA:
            items = action.response.body;
            store.emitChange();
            break;
        case appConstants.api.GET:
            item = action.response.body;
            store.emitChange();
            break;
    }

    return true;
});

module.exports = store;