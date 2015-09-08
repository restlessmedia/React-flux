var storeUtils = require('../utils/storeUtils');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var items = [{}];

var store = storeUtils.createStore({
    getState: function () {
        return {
            items: items
        }
    }
});

function persist(response) {
    items = response.body;
    store.emitChange();
}

store.appDispatch = AppDispatcher.register(function (payload) {
    var action = payload.action;

    if (action.response === appConstants.action.PENDING) {
        store.emitPending();
    } else {
        switch (action.actionType) {
            case appConstants.api.GET_DATA:
                persist(action.response);
                break;
        }
    }

    return true;
});

module.exports = store;