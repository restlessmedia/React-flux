var httpUtils = require('../utils/httpUtils');

var getData = function (params) {
    var url = 'json/list.json';
    return httpUtils.get(url);
};

var get = function (params) {
    var url = 'json/display.json?id=' + params;
    return httpUtils.get(url);
};

var search = function (params) {
    var url = 'json/list.json?author=' + params.author + '&text=' + params.text;
    return httpUtils.get(url);
};

module.exports = {
    getData: getData,
    get: get,
    search: search
};