var appConstants = require('../constants/appConstants');
var listApi = require('../api/listApi');
var actionUtils = require('../utils/actionUtils');

module.exports = {
    getData: function (params) {
        actionUtils.dispatchPending(appConstants.api.GET_DATA, params);
        listApi.getData().end(
            actionUtils.handle(appConstants.api.GET_DATA, params)
        );
    },
    get: function (params) {
        actionUtils.dispatchPending(appConstants.api.GET, params);
        listApi.get(params).end(
            actionUtils.handle(appConstants.api.GET, params)
        );
    }
};