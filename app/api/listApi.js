var httpUtils = require('../utils/httpUtils');

var getData = function (params) {
    var url = 'json/list.json';
    return httpUtils.get(url, params);
};

var get = function (id) {
    var url = 'json/display.json';
    return httpUtils.get(url, {id: id});
};

var search = function (params) {
    var url = 'json/list.json';
    return httpUtils.get(url, params);
};

module.exports = {
    getData: getData,
    get: get,
    search: search
};