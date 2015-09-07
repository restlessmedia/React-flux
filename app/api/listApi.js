var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

function dispatch(key, response, params) {
    var payload = {actionType: key, response: response};
    if (params) {
        payload.queryParams = params;
    }
    AppDispatcher.handleAction(payload);
}

var getData = function () {
    dispatch(appConstants.api.GET_DATA, appConstants.request.PENDING);
};

module.exports = {
    getData: getData
};