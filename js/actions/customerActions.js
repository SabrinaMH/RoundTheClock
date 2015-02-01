'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');

var customerActions = {
	customerChanged: function(customerName){
		appDispatcher.dispatch({
			actionType: constants.CUSTOMER_CHANGED,
			data: customerName
		});
	}
};

module.exports = customerActions;