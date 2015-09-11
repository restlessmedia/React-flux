var appConstants = require('../constants/appConstants');
var listApi = require('../api/listApi');
var actionUtils = require('../utils/actionUtils');

var randTimeout = function () {
    return Math.floor(Math.random() * 3000) + 1000;
};

var handle = function (key, api, params) {
    actionUtils.dispatchPending(key, params);
    var handler = actionUtils.dispatchHandler(key, params);
    api(params).end(function (err, res) {
        setTimeout(function () {
            handler(err, res);
        }, randTimeout());
    });
};

var getData = function (params) {
    params = params || {};
    if (!params.page) {
        params.page = 1;
    }
    handle(appConstants.api.GET_DATA, listApi.getData, params);
};

var get = function (id) {
    handle(appConstants.api.GET, listApi.get, id);
};

var search = function (params) {
    handle(appConstants.api.SEARCH, listApi.search, params);
};

module.exports = {
    getData: getData,
    get: get,
    search: search
};