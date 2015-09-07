var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var listApi = require('../api/listApi');

var todoActions = {
    getData: function(){
        listApi.getData();
    }
};

module.exports = todoActions;