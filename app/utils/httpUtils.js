var request = require('superagent');
var timeout = 10000;

function get(url) {
    return request
        .get(url)
        .set('Accept', 'application/json')
        .timeout(timeout);
}

module.exports = {
    get: get
};