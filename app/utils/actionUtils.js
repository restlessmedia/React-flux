var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var dispatch = function (key, response, params) {
    var payload = {actionType: key, response: response};
    if (params) {
        payload.params = params;
    }
    AppDispatcher.handleAction(payload);
};

var dispatchPending = function (key, params) {
    dispatch(key, appConstants.action.PENDING, params);
};

var dispatchHandler = function (key, params) {
    return function (err, res) {
        if (err && err.timeout === timeout) {
            res = appConstants.action.TIMEOUT;
        } else if (res.status === 400) {
            res = appConstants.action.UNAUTHORISED;
        } else if (!res.ok) {
            res = appConstants.action.ERROR;
        }
        dispatch(key, res, params);
    };
};

module.exports = {
    dispatch: dispatch,
    dispatchPending: dispatchPending,
    dispatchHandler: dispatchHandler
};