'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');
var webApi = require('../utils/webApi');

var webApiActions = {
	getCustomers: function(){
		console.log("In webApiActions method: getCustomers");
		webApi.getCustomers().then(function(data){
			console.log("dispatching");
			appDispatcher.dispatch({
				actionType: constants.GET_CUSTOMERS_SUCCESS,
				data: data.Customer
			});
		}, function(error){
			appDispatcher.dispatch({
				actionType: constants.GET_CUSTOMERS_ERROR,
				error: error
			});
		});
	}
};

module.exports = webApiActions;