'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');
var webApi = require('../utils/webApi');

var webApiActions = {
	getCustomers: function(){
		webApi.getCustomers().then(function(data){
			appDispatcher.dispatch({
				actionType: constants.GET_CUSTOMERS_SUCCESS,
				data: data
			});
		}, function(error){
			appDispatcher.dispatch({
				actionType: constants.GET_CUSTOMERS_ERROR,
				error: error
			});
		});
	},

	saveTimeEntry: function(timeEntry){
		webApi.saveTimeEntry(timeEntry).then(function(result){
			appDispatcher.dispatch({
				actionType: constants.TIME_ENTRY_SAVED
			});
		}, function(error){
			appDispatcher.dispatch({
				actionType: constants.TIME_ENTRY_SAVED_ERROR,
				error: error
			});
		});
	}
};

module.exports = webApiActions;