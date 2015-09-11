var appConstants = require('../constants/appConstants');
var listApi = require('../api/listApi');
var actionUtils = require('../utils/actionUtils');

var handle = function (key, api, params) {
    actionUtils.dispatchPending(key, params);
    api(params).end(actionUtils.handle(key, params));
};

module.exports = {
    getData: function (params) {
        params = params || {};
        if (!params.page) {
            params.page = 1;
        }
        handle(appConstants.api.GET_DATA, listApi.getData, params);
    },
    get: function (id) {
        handle(appConstants.api.GET, listApi.get, id);
    },
    search: function (params) {
        handle(appConstants.api.SEARCH, listApi.search, params);
    }
};