var request = require('superagent');
var timeout = 10000;

var toQuery = function (params) {
    return Object.keys(params).map(function (key) {
        return key + '=' + (params[key] || '');
    }).join('&');
};

var makeUrl = function (url, params) {
    if (url) {
        if (params) {
            url = url + (url.indexOf('?') > -1 ? '&' : '?') + toQuery(params);
        }
    }
    return url;
};

var get = function (url, params) {
    return request
        .get(makeUrl(url, params))
        .set('Accept', 'application/json')
        .timeout(timeout);
};

module.exports = {
    get: get,
    toQuery: toQuery
};