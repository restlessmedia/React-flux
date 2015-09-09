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

function handle(key, params) {
    return function (err, res) {
        if (err && err.timeout === timeout) {
            dispatch(key, appConstants.action.TIMEOUT, params);
        } else if (res.status === 400) {
            dispatch(key, appConstants.action.UNAUTHORISED, params);
        } else if (!res.ok) {
            dispatch(key, appConstants.action.ERROR, params);
        } else {
            dispatch(key, res, params);
        }
    };
}

module.exports = {
    dispatch: dispatch,
    dispatchPending: dispatchPending,
    handle: handle
};