var storeUtils = require('../utils/storeUtils');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var items;

var store = storeUtils.createStore({
    getList: function () {
        return items;
    }
});

module.exports = store;