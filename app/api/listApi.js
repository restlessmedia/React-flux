var httpUtils = require('../utils/httpUtils');

var getData = function () {
    var url = 'json/list.json';
    return httpUtils.get(url);
};

module.exports = {
    getData: getData
};